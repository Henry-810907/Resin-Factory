#!/usr/bin/env python3
"""
一次性给 6 个非英文字典 patch 新字段:
  - header.nav.home
  - footer.linksServices / linksMore (改新链接)
  - products.faq
  - about.teamSubtitle + 重写 about.team
  - blog: 新增 contactCta*/relatedTitle/englishOnlyNotice;移除 newsletter/loadMore
  - notFound
  - legal (privacy/terms/shipping — sections 用英文 fallback,标题翻译)

已有 UI 文案保留不动。
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DICTS = ROOT / "i18n" / "dictionaries"

# ---- 各语言的「短 UI 字符串」翻译 ----
T = {
    "de": {
        "home": "Startseite",
        "footer_services": [
            {"label": "Kostenlose 3D-Modellierung", "href": "/products"},
            {"label": "Massenproduktion", "href": "/products"},
            {"label": "Zertifizierungen", "href": "/values"},
            {"label": "Portfolio", "href": "/portfolio"},
        ],
        "footer_more": [
            {"label": "Datenschutz", "href": "/privacy"},
            {"label": "AGB", "href": "/terms"},
            {"label": "Versand & Rückgabe", "href": "/shipping"},
            {"label": "Kontakt", "href": "/contact"},
        ],
        "faq_kicker": "Häufige Fragen",
        "faq_title": "Was Erstkäufer fragen",
        "team_subtitle": "Bildhauer, Formenbauer, Gießer, Maler, QA und Verpacker — ein kleines Team, in dem jeder die ausgehenden Figuren kennt.",
        "team": [
            {"role": "Bildhauer", "count": "8", "note": "Skizze → 3D-Skulptur → gedruckter Master."},
            {"role": "Formen & Guss", "count": "14", "note": "Silikonformen, tägliches Harzgießen."},
            {"role": "Handmaler", "count": "20", "note": "Airbrush-Basis, Pinseldetails, Finish."},
            {"role": "QA & Verpackung", "count": "8", "note": "Jedes Stück geprüft, von Hand verpackt."},
        ],
        "blog_contact_title": "Haben Sie ein Projekt zu besprechen?",
        "blog_contact_subtitle": "Wir antworten innerhalb von 24 Stunden mit einem kostenlosen 3D-Mockup und Angebot.",
        "blog_contact_button": "Angebot anfordern",
        "blog_related": "Weiterlesen",
        "blog_english_notice": "Hinweis: Artikel werden in englischer Sprache veröffentlicht. Andere Seiten sind in Ihrer Sprache verfügbar.",
        "nf_title": "Diese Seite finden wir nicht",
        "nf_subtitle": "Der Link ist möglicherweise defekt oder die Seite wurde verschoben. Gehen Sie zur Startseite zurück oder kontaktieren Sie uns — wir helfen Ihnen weiter.",
        "nf_home": "Zurück zur Startseite",
        "nf_contact": "Kontakt aufnehmen",
        "legal_cta": "Fragen zu dieser Seite? Wir helfen gerne weiter.",
        "legal_cta_btn": "Kontakt",
        "legal_privacy_title": "Datenschutzrichtlinie",
        "legal_terms_title": "Nutzungsbedingungen",
        "legal_shipping_title": "Versand & Rückgabe",
        "legal_lastupd": "Zuletzt aktualisiert: 15. Mai 2026",
    },
    "fr": {
        "home": "Accueil",
        "footer_services": [
            {"label": "Sculpture 3D gratuite", "href": "/products"},
            {"label": "Production en série", "href": "/products"},
            {"label": "Certifications", "href": "/values"},
            {"label": "Portfolio", "href": "/portfolio"},
        ],
        "footer_more": [
            {"label": "Confidentialité", "href": "/privacy"},
            {"label": "Conditions d'utilisation", "href": "/terms"},
            {"label": "Livraison & Retours", "href": "/shipping"},
            {"label": "Contact", "href": "/contact"},
        ],
        "faq_kicker": "Questions fréquentes",
        "faq_title": "Ce que demandent les nouveaux acheteurs",
        "team_subtitle": "Sculpteurs, mouleurs, couleurs, peintres, QA et emballeurs — une petite équipe où chacun connaît chaque figurine qui sort.",
        "team": [
            {"role": "Sculpteurs", "count": "8", "note": "Croquis → sculpture 3D → master imprimé."},
            {"role": "Moulage & Coulage", "count": "14", "note": "Moules en silicone, coulées de résine quotidiennes."},
            {"role": "Peintres à la main", "count": "20", "note": "Base aérographe, détails au pinceau, finition."},
            {"role": "QA & Emballage", "count": "8", "note": "Chaque pièce inspectée, emballée à la main."},
        ],
        "blog_contact_title": "Vous avez un projet à discuter ?",
        "blog_contact_subtitle": "Nous répondons sous 24h avec une maquette 3D et un devis gratuits.",
        "blog_contact_button": "Demander un devis",
        "blog_related": "Continuer la lecture",
        "blog_english_notice": "Remarque : Le contenu des articles est publié en anglais. Les autres pages sont disponibles dans votre langue.",
        "nf_title": "Page introuvable",
        "nf_subtitle": "Le lien est peut-être cassé ou la page a été déplacée. Retournez à l'accueil ou contactez-nous — nous vous orienterons.",
        "nf_home": "Retour à l'accueil",
        "nf_contact": "Nous contacter",
        "legal_cta": "Des questions sur cette page ? Nous serons heureux de clarifier.",
        "legal_cta_btn": "Contact",
        "legal_privacy_title": "Politique de confidentialité",
        "legal_terms_title": "Conditions d'utilisation",
        "legal_shipping_title": "Livraison & Retours",
        "legal_lastupd": "Dernière mise à jour : 15 mai 2026",
    },
    "es": {
        "home": "Inicio",
        "footer_services": [
            {"label": "Modelado 3D gratuito", "href": "/products"},
            {"label": "Producción en masa", "href": "/products"},
            {"label": "Certificaciones", "href": "/values"},
            {"label": "Portfolio", "href": "/portfolio"},
        ],
        "footer_more": [
            {"label": "Privacidad", "href": "/privacy"},
            {"label": "Términos de uso", "href": "/terms"},
            {"label": "Envíos & Devoluciones", "href": "/shipping"},
            {"label": "Contacto", "href": "/contact"},
        ],
        "faq_kicker": "Preguntas frecuentes",
        "faq_title": "Lo que preguntan los nuevos compradores",
        "team_subtitle": "Escultores, moldeadores, fundidores, pintores, QA y empaquetadores — un equipo pequeño donde todos conocen cada figura que sale.",
        "team": [
            {"role": "Escultores", "count": "8", "note": "Boceto → escultura 3D → master impreso."},
            {"role": "Moldeo & Fundición", "count": "14", "note": "Moldes de silicona, vertidos diarios de resina."},
            {"role": "Pintores a mano", "count": "20", "note": "Base aerógrafo, detalle a pincel, acabado."},
            {"role": "QA & Empaque", "count": "8", "note": "Cada pieza inspeccionada, empacada a mano."},
        ],
        "blog_contact_title": "¿Tienes un proyecto del que hablar?",
        "blog_contact_subtitle": "Respondemos en 24 horas con una maqueta 3D y presupuesto gratuitos.",
        "blog_contact_button": "Solicitar presupuesto",
        "blog_related": "Seguir leyendo",
        "blog_english_notice": "Nota: El contenido de los artículos se publica en inglés. Las demás páginas están disponibles en tu idioma.",
        "nf_title": "No encontramos esa página",
        "nf_subtitle": "Es posible que el enlace esté roto o que la página se haya movido. Vuelve al inicio o contáctanos — te orientamos.",
        "nf_home": "Volver al inicio",
        "nf_contact": "Contáctanos",
        "legal_cta": "¿Preguntas sobre algo en esta página? Con gusto aclaramos.",
        "legal_cta_btn": "Contáctanos",
        "legal_privacy_title": "Política de Privacidad",
        "legal_terms_title": "Términos de Servicio",
        "legal_shipping_title": "Envíos y Devoluciones",
        "legal_lastupd": "Última actualización: 15 de mayo de 2026",
    },
    "ja": {
        "home": "ホーム",
        "footer_services": [
            {"label": "無料3Dスカルプト", "href": "/products"},
            {"label": "大量生産", "href": "/products"},
            {"label": "認証", "href": "/values"},
            {"label": "実績", "href": "/portfolio"},
        ],
        "footer_more": [
            {"label": "プライバシーポリシー", "href": "/privacy"},
            {"label": "利用規約", "href": "/terms"},
            {"label": "配送・返品", "href": "/shipping"},
            {"label": "お問い合わせ", "href": "/contact"},
        ],
        "faq_kicker": "よくある質問",
        "faq_title": "初めてのお客様からよくいただく質問",
        "team_subtitle": "造形師、型師、注型、ペインター、QA、梱包担当 — 出荷する1体1体を全員が把握する小さなチーム。",
        "team": [
            {"role": "造形師", "count": "8", "note": "スケッチ→3D造形→印刷マスター。"},
            {"role": "型・注型", "count": "14", "note": "シリコン型、毎日のレジン注型。"},
            {"role": "ハンドペインター", "count": "20", "note": "エアブラシベース、筆で細部、仕上げ。"},
            {"role": "QA・梱包", "count": "8", "note": "1点ずつ検品、手作業でトレーパック。"},
        ],
        "blog_contact_title": "プロジェクトのご相談はこちら",
        "blog_contact_subtitle": "24時間以内に無料3Dモックと見積りをお返しします。",
        "blog_contact_button": "お見積もり",
        "blog_related": "続きを読む",
        "blog_english_notice": "ご注意:記事本文は英語で公開しています。他のページはお選びの言語でご覧いただけます。",
        "nf_title": "ページが見つかりません",
        "nf_subtitle": "リンク切れまたはページが移動した可能性があります。ホームに戻るか、お問い合わせください。",
        "nf_home": "ホームに戻る",
        "nf_contact": "お問い合わせ",
        "legal_cta": "このページに関するご質問は、お気軽にお問い合わせください。",
        "legal_cta_btn": "お問い合わせ",
        "legal_privacy_title": "プライバシーポリシー",
        "legal_terms_title": "利用規約",
        "legal_shipping_title": "配送・返品ポリシー",
        "legal_lastupd": "最終更新日:2026年5月15日",
    },
    "ko": {
        "home": "홈",
        "footer_services": [
            {"label": "무료 3D 조각", "href": "/products"},
            {"label": "대량 생산", "href": "/products"},
            {"label": "인증", "href": "/values"},
            {"label": "포트폴리오", "href": "/portfolio"},
        ],
        "footer_more": [
            {"label": "개인정보처리방침", "href": "/privacy"},
            {"label": "이용약관", "href": "/terms"},
            {"label": "배송 및 반품", "href": "/shipping"},
            {"label": "문의하기", "href": "/contact"},
        ],
        "faq_kicker": "자주 묻는 질문",
        "faq_title": "처음 의뢰하는 분들이 가장 많이 묻는 것",
        "team_subtitle": "조각, 몰드 제작, 캐스팅, 페인팅, QA, 포장 — 모두가 출하되는 모든 피규어를 알고 있는 작은 팀입니다.",
        "team": [
            {"role": "조각가", "count": "8", "note": "스케치 → 3D 조각 → 프린트 마스터."},
            {"role": "몰드 & 캐스팅", "count": "14", "note": "실리콘 몰드, 매일 레진 캐스팅."},
            {"role": "수작업 페인터", "count": "20", "note": "에어브러시 베이스, 붓 디테일, 마감."},
            {"role": "QA & 포장", "count": "8", "note": "전 제품 검수, 수작업 트레이 포장."},
        ],
        "blog_contact_title": "프로젝트 상담을 원하시나요?",
        "blog_contact_subtitle": "24시간 내 무료 3D 목업과 견적으로 회신드립니다.",
        "blog_contact_button": "견적 요청",
        "blog_related": "더 읽기",
        "blog_english_notice": "안내: 기사 본문은 영어로 게시됩니다. 다른 페이지는 선택하신 언어로 이용 가능합니다.",
        "nf_title": "페이지를 찾을 수 없습니다",
        "nf_subtitle": "링크가 깨졌거나 페이지가 이동되었을 수 있습니다. 홈으로 돌아가거나 문의해 주세요.",
        "nf_home": "홈으로 돌아가기",
        "nf_contact": "문의하기",
        "legal_cta": "이 페이지에 대한 문의가 있으시면 언제든 연락 주세요.",
        "legal_cta_btn": "문의하기",
        "legal_privacy_title": "개인정보 처리방침",
        "legal_terms_title": "이용약관",
        "legal_shipping_title": "배송 및 반품 정책",
        "legal_lastupd": "최종 업데이트: 2026년 5월 15일",
    },
    "ar": {
        "home": "الرئيسية",
        "footer_services": [
            {"label": "نحت ثلاثي الأبعاد مجاني", "href": "/products"},
            {"label": "الإنتاج بالجملة", "href": "/products"},
            {"label": "الشهادات", "href": "/values"},
            {"label": "أعمالنا", "href": "/portfolio"},
        ],
        "footer_more": [
            {"label": "سياسة الخصوصية", "href": "/privacy"},
            {"label": "شروط الاستخدام", "href": "/terms"},
            {"label": "الشحن والإرجاع", "href": "/shipping"},
            {"label": "اتصل بنا", "href": "/contact"},
        ],
        "faq_kicker": "أسئلة شائعة",
        "faq_title": "ما يسأله المشترون لأول مرة",
        "team_subtitle": "نحاتون، صانعو قوالب، صبّابون، رسامون، فحص الجودة والتعبئة — فريق صغير يعرف فيه الجميع كل قطعة تخرج من الورشة.",
        "team": [
            {"role": "النحاتون", "count": "8", "note": "رسم → نحت ثلاثي الأبعاد → ماستر مطبوع."},
            {"role": "القوالب والصب", "count": "14", "note": "قوالب سيليكون، صب يومي للراتنج."},
            {"role": "الرسم اليدوي", "count": "20", "note": "قاعدة بالأيروبراش، تفاصيل بالفرشاة، تشطيب."},
            {"role": "الجودة والتعبئة", "count": "8", "note": "فحص كل قطعة وتعبئتها يدوياً."},
        ],
        "blog_contact_title": "لديك مشروع تريد مناقشته؟",
        "blog_contact_subtitle": "نرد خلال 24 ساعة بنموذج ثلاثي الأبعاد وعرض سعر مجاني.",
        "blog_contact_button": "اطلب عرض سعر",
        "blog_related": "اقرأ المزيد",
        "blog_english_notice": "ملاحظة: محتوى المقالات منشور بالإنجليزية. الصفحات الأخرى متاحة بلغتك.",
        "nf_title": "لم نتمكن من العثور على الصفحة",
        "nf_subtitle": "قد يكون الرابط معطلاً أو تم نقل الصفحة. عُد إلى الرئيسية أو تواصل معنا — سنرشدك.",
        "nf_home": "العودة للرئيسية",
        "nf_contact": "تواصل معنا",
        "legal_cta": "أسئلة حول هذه الصفحة؟ يسعدنا التوضيح.",
        "legal_cta_btn": "تواصل معنا",
        "legal_privacy_title": "سياسة الخصوصية",
        "legal_terms_title": "شروط الخدمة",
        "legal_shipping_title": "الشحن والإرجاع",
        "legal_lastupd": "آخر تحديث: 15 مايو 2026",
    },
}

# 共享:产品 FAQ items 用英文 fallback (lang attr 在文章页面是 en)
en = json.loads((DICTS / "en.json").read_text(encoding="utf-8"))
EN_FAQ = en["products"]["faq"]["items"]
EN_LEGAL = en["legal"]
EN_INTRO_PRIVACY = EN_LEGAL["privacy"]["intro"]
EN_INTRO_TERMS = EN_LEGAL["terms"]["intro"]
EN_INTRO_SHIPPING = EN_LEGAL["shipping"]["intro"]


def patch(lang_code: str):
    p = DICTS / f"{lang_code}.json"
    d = json.loads(p.read_text(encoding="utf-8"))
    t = T[lang_code]

    # header.nav.home
    d["header"]["nav"]["home"] = t["home"]

    # footer 链接
    d["footer"]["linksServices"] = t["footer_services"]
    d["footer"]["linksMore"] = t["footer_more"]

    # products.faq
    d["products"]["faq"] = {
        "kicker": t["faq_kicker"],
        "title": t["faq_title"],
        # 沿用英文 FAQ 内容 — 大多数 B2B 客户接受英文常见问题
        "items": EN_FAQ,
    }

    # about.teamSubtitle 和 about.team 改新结构
    d["about"]["teamSubtitle"] = t["team_subtitle"]
    d["about"]["team"] = t["team"]

    # blog: 移除 newsletter*/loadMore,加 contactCta*/relatedTitle/englishOnlyNotice
    blog = d["blog"]
    for k in ("newsletterTitle", "newsletterSubtitle", "newsletterPlaceholder", "newsletterButton", "loadMore"):
        blog.pop(k, None)
    blog["contactCtaTitle"] = t["blog_contact_title"]
    blog["contactCtaSubtitle"] = t["blog_contact_subtitle"]
    blog["contactCtaButton"] = t["blog_contact_button"]
    blog["relatedTitle"] = t["blog_related"]
    blog["englishOnlyNotice"] = t["blog_english_notice"]

    # notFound
    d["notFound"] = {
        "title": t["nf_title"],
        "subtitle": t["nf_subtitle"],
        "homeButton": t["nf_home"],
        "contactButton": t["nf_contact"],
    }

    # legal: title/intro/lastUpdated 翻译,sections 沿用英文(法律内容用英文 sections,仍合规)
    d["legal"] = {
        "contactCta": t["legal_cta"],
        "contactCtaButton": t["legal_cta_btn"],
        "privacy": {
            "title": t["legal_privacy_title"],
            "intro": EN_INTRO_PRIVACY,
            "lastUpdated": t["legal_lastupd"],
            "sections": EN_LEGAL["privacy"]["sections"],
        },
        "terms": {
            "title": t["legal_terms_title"],
            "intro": EN_INTRO_TERMS,
            "lastUpdated": t["legal_lastupd"],
            "sections": EN_LEGAL["terms"]["sections"],
        },
        "shipping": {
            "title": t["legal_shipping_title"],
            "intro": EN_INTRO_SHIPPING,
            "lastUpdated": t["legal_lastupd"],
            "sections": EN_LEGAL["shipping"]["sections"],
        },
    }

    # 保证 header.nav 顺序: home 排第一
    nav = d["header"]["nav"]
    ordered = {"home": nav.pop("home", t["home"])}
    ordered.update(nav)
    d["header"]["nav"] = ordered

    # 同样给 en.json 的 nav 也加 home (already added in en write)
    p.write_text(json.dumps(d, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"  patched {lang_code}.json")


# 顺便给 EN 的 header.nav 重排序 (home first)
en_dict = en
nav = en_dict["header"]["nav"]
ordered = {"home": nav.pop("home", "Home")}
ordered.update(nav)
en_dict["header"]["nav"] = ordered
(DICTS / "en.json").write_text(json.dumps(en_dict, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print("  re-ordered en.json nav (home first)")

for lang in ("de", "fr", "es", "ja", "ko", "ar"):
    patch(lang)

print("done")
