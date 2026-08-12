"use client";

import { useState, FormEvent, useRef } from "react";
import CustomSelect from "./CustomSelect";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/settings";

type Props = {
  dict: Dictionary["contact"];
  lang: Locale;
};

type Status = "idle" | "sending" | "success" | "error";

/**
 * 联系表单(客户端版,提交到 /api/contact):
 *  - fetch 提交,不再页面跳转
 *  - 状态切换:idle → sending → success/error,文案从字典读
 *  - 文件上传支持(可选)
 *  - 蜜罐 + 当前语言一并发送
 */
export default function ContactForm({ dict, lang }: Props) {
  const f = dict.form;
  const states = dict.states;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 处理文件选择
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(prev => [...prev, ...files]);
  };

  // 删除已选文件
  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  // 格式化文件大小
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    data.set("_lang", lang);

    // 添加选中的文件到 FormData
    selectedFiles.forEach((file) => {
      data.append("attachment", file);
    });

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMsg((json && json.error) || states.error);
        setStatus("error");
        return;
      }
      setStatus("success");
      formRef.current?.reset();
    } catch {
      setErrorMsg(states.error);
      setStatus("error");
    }
  };

  // 提交成功后显示一个完整的成功卡(替代表单)
  if (status === "success") {
    return (
      <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-7 md:p-12 text-center">
        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-brand-dark mb-3 tracking-tight">
          {f.submit} ✓
        </h2>
        <p className="text-base text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">{states.success}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm text-brand-orange hover:text-brand-orangeDark underline underline-offset-4"
        >
          ← Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      encType="multipart/form-data"
      className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-7 md:p-10 space-y-5 sm:space-y-6"
    >
      {/* 蜜罐:真人看不见,机器人会填,填了静默丢弃 */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">{f.fullName} {f.required}</label>
          <input name="full_name" type="text" required disabled={status === "sending"} className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange disabled:bg-slate-50" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">{f.email} {f.required}</label>
          <input name="email" type="email" required disabled={status === "sending"} className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange disabled:bg-slate-50" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">{f.phone}</label>
          <input name="phone" type="tel" disabled={status === "sending"} className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange disabled:bg-slate-50" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">{f.quantity}</label>
          <input name="quantity" type="number" min="1" disabled={status === "sending"} className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange disabled:bg-slate-50" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">{f.project}</label>
        <textarea name="message" rows={4} disabled={status === "sending"} className="w-full px-4 py-3 text-sm rounded-md border border-slate-300 focus:outline-none focus:border-brand-orange resize-none disabled:bg-slate-50" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-stretch gap-3">
        <label className="flex-1 flex items-center justify-center text-sm text-slate-500 border border-dashed border-slate-300 rounded-md px-4 py-3 text-center cursor-pointer hover:border-brand-orange hover:text-brand-orange transition">
          📎 {f.attach}
          <input
            ref={fileInputRef}
            name="attachment"
            type="file"
            multiple
            accept=".png,.jpg,.jpeg,.pdf,.ai,.stl,.ztl,image/*,application/pdf"
            disabled={status === "sending"}
            onChange={handleFileChange}
            className="sr-only"
          />
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-brand-orange hover:bg-brand-orangeDark transition text-white text-sm font-semibold px-8 py-3 rounded-md shadow-sm whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? states.sending : f.submit}
        </button>
      </div>

      {/* 已选文件列表 */}
      {selectedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-700">
            {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''} selected
          </p>
          <ul className="space-y-1.5">
            {selectedFiles.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-slate-700 truncate">{file.name}</p>
                  <p className="text-xs text-slate-500">{formatFileSize(file.size)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  disabled={status === "sending"}
                  className="ml-2 text-slate-400 hover:text-red-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Remove file"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 错误提示 */}
      {status === "error" && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-3 leading-relaxed">
          {errorMsg || states.error}
        </div>
      )}
    </form>
  );
}
