import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Node runtime(nodemailer 需要 Node API)
export const runtime = "nodejs";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const cell = (k: string, v: string) =>
  `<tr><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;font-weight:600;color:#475569;background:#f8fafc;width:160px">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a">${v || "—"}</td></tr>`;

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();
    const get = (k: string) => String(form.get(k) ?? "").trim();

    // 蜜罐:机器人会填,真人不会 — 静默成功避免暴露反垃圾机制
    if (get("_honey")) return NextResponse.json({ ok: true });

    const fullName = get("full_name");
    const company = get("company");
    const email = get("email");
    const phone = get("phone");
    const productType = get("product_type");
    const quantity = get("quantity");
    const message = get("message");
    const lang = get("_lang") || "en";

    // 必填校验
    if (!fullName || !company || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // 处理附件(可选,一个或多个)
    const attachments: { filename: string; content: Buffer }[] = [];
    const files = form.getAll("attachment");
    for (const f of files) {
      if (f instanceof File && f.size > 0) {
        if (f.size > 10 * 1024 * 1024) {
          return NextResponse.json({ error: "Attachment too large (max 10MB)" }, { status: 400 });
        }
        const buf = Buffer.from(await f.arrayBuffer());
        attachments.push({ filename: f.name, content: buf });
      }
    }

    // 校验 SMTP 配置存在
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
      console.error("[contact] SMTP env vars missing");
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }
    const port = Number(SMTP_PORT) || 465;

    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465, // 465 → SSL,587 → STARTTLS
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    const inquiryTo = process.env.INQUIRY_TO_EMAIL || SMTP_USER;
    const subject = `New Inquiry · ${company} · ${productType || "Resin Figurine"}`;

    const tableHtml = `
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:14px;width:100%;max-width:640px;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden">
        ${cell("Name", escapeHtml(fullName))}
        ${cell("Company", escapeHtml(company))}
        ${cell("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#E65A1F">${escapeHtml(email)}</a>`)}
        ${cell("Phone / WhatsApp", escapeHtml(phone))}
        ${cell("Product type", escapeHtml(productType))}
        ${cell("Estimated quantity", escapeHtml(quantity))}
        ${cell("Message", escapeHtml(message).replace(/\n/g, "<br/>"))}
        ${cell("Language", lang)}
        ${cell("Attachments", attachments.length ? attachments.map((a) => escapeHtml(a.filename)).join("<br/>") : "—")}
      </table>
    `;

    // 1. 发给自己(henry@)
    await transport.sendMail({
      from: `"Resin Factory Website" <${SMTP_USER}>`,
      to: inquiryTo,
      replyTo: `${fullName} <${email}>`, // 直接「回复」就回到客户邮箱
      subject,
      html: `<div style="background:#f8fafc;padding:24px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif"><h2 style="margin:0 0 16px;color:#0f172a;font-size:20px">New inquiry from resin-factory.com</h2>${tableHtml}<p style="margin-top:16px;font-size:12px;color:#64748b">Reply to this email and your message will go directly to ${escapeHtml(fullName)} (${escapeHtml(email)}).</p></div>`,
      attachments,
    });

    // 2. 自动回执给客户
    try {
      await transport.sendMail({
        from: `"Resin Factory" <${SMTP_USER}>`,
        to: email,
        subject: "Thanks for your inquiry — Resin Factory",
        html: `<div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;font-size:15px;line-height:1.6;color:#0f172a;max-width:560px">
          <p>Hi ${escapeHtml(fullName)},</p>
          <p>Thanks for reaching out to <strong>Resin Factory</strong> — your inquiry has been received.</p>
          <p>Our sculptors will reply within <strong>24 hours</strong> with a free 3D mock-up and quote.</p>
          <p>If urgent, WhatsApp us: <a href="https://wa.me/8613682692148" style="color:#E65A1F">+86 136 8269 2148</a></p>
          <p style="margin-top:24px">Best,<br/><strong>Henry</strong><br/>Resin Factory · Shenzhen Heli Toys Co., Ltd.<br/><a href="https://resin-factory.com" style="color:#E65A1F">resin-factory.com</a></p>
        </div>`,
      });
    } catch (e) {
      // 回执失败不影响主流程,只记录
      console.warn("[contact] auto-reply failed", e);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
