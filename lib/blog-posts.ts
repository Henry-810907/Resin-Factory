/**
 * 博客文章正文(英文,所有语言版本共用 — 文章主体内容用 lang="en" 标记)
 * 标题、副标题、tag、日期由各语言字典提供。
 *
 * 添加新文章:
 *  1. 在这里加新条目(slug + image + 段落)
 *  2. 在 i18n/dictionaries/*.json 的 blog.posts 加对应标题/摘要
 *  3. 在 sitemap.ts 的 BLOG_SLUGS 加 slug
 */

export type BlogImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type BlogImageBlock = {
  afterParagraph: number; // 在第几段后插入 (1-based)
  images: BlogImage[];    // 1张=单图, 2张=并排, 3张=三列, 4张=2x2
};

export type BlogPost = {
  slug: string;
  image: string;
  /** 与 dict.blog.posts/featured 中的 index 关联 — featured 是 -1 */
  dictKey: "featured" | number;
  /** 英文正文段落 */
  paragraphs: string[];
  /** 文章顶部副标题/摘要(英文) */
  intro: string;
  /** 发布日期 (ISO 格式: YYYY-MM-DD) */
  date: string;
  /** 正文内嵌图片块 (可选) */
  imageBlocks?: BlogImageBlock[];
};

export const FEATURED_SLUG = "why-figurine-eyes-look-unnatural";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: FEATURED_SLUG,
    image: "/blog/eyes-with-lashes.jpg",
    dictKey: "featured",
    date: "2026-08-11",
    intro:
      "For 8-15cm resin figurines, eyes often appear lifeless or even creepy. What's the problem? How one eyelash line changes everything.",
    paragraphs: [
      "You receive a batch of resin figurine samples. The overall craftsmanship is good, but something feels off. You look closer—it's the eyes. Those eyes stare at you blankly, lifeless, soulless, even a bit creepy. This isn't an isolated case. In the resin figurine customization industry, this is a common problem, especially for small-sized products (8-15cm).",
      "After years of research and countless sample comparisons, we discovered a critical detail: missing eyelashes. Many people instinctively think: the product is so small, the eyes are only a few millimeters—how can you paint eyelashes? It's impossible, so skip it. And so, the eyelashes are omitted. But this 'skip it' decision drains all life from the product.",
      "The eyes are the soul of the product. And eyelashes are the finishing touch. Eyes without eyelashes look flat and lifeless, lack depth and dimension, appear hollow, even creepy, and make the product look cheap. Eyes with eyelashes look natural and harmonious, appear vivid and full of life, have gentle, approachable eyes, and instantly elevate the product's quality.",
      "This isn't exaggeration—it's visual psychology. Eyelashes add depth and expression to the eyes, transforming the product from 'looks like a person' to 'comes alive.'",
      "Since large products can easily have detailed eyelashes painted, what about 8-15cm small products? Our solution: paint a thin line at the outermost edge of the eyelid. That simple. This line doesn't need to paint every individual eyelash detail—just use a fine brushstroke along the eyelid edge to simulate the eyelash contour. The effect is immediate: eyes instantly gain spirit, product becomes natural and harmonious, overall quality perception significantly improves.",
      "This is the magic of one line, and the best proof that details determine quality. In the resin figurine customization industry, details determine success or failure. Don't ignore eyelashes: no matter how small the product, eyelashes are essential. Use simplified approach for small sizes: paint one line, no need for every individual lash. The contrast between with/without eyelashes is dramatic.",
      "Even if customers can't articulate what's wrong, they'll feel 'this product is better.' Resin figurine customization isn't just about getting the shape right—it's about giving the product life. One eyelash line may seem insignificant, but it determines whether a product is 'ordinary' or 'excellent,' 'lifeless' or 'vivid.' This is the detail we insist on, and the reason we build long-term partnerships with our clients.",
    ],
    imageBlocks: [
      {
        afterParagraph: 3,
        images: [
          { src: "/blog/eyes-without-lashes.jpg", alt: "Eyes without eyelash line - flat and lifeless", caption: "Without eyelash line" },
          { src: "/blog/eyes-with-lashes.jpg", alt: "Eyes with eyelash line - natural and vivid", caption: "With eyelash line" }
        ]
      }
    ],
  },
  {
    slug: "low-moq-indie-designer-toys",
    image: "/pictures/jpg/img_2722.jpg",
    dictKey: 0,
    date: "2026-04-28",
    intro:
      "Why a 100-unit MOQ matters more than you think for indie designer-toy artists, and how to think about your first run.",
    paragraphs: [
      "Most resin factories quote you 500 minimum. Some quote 1,000. We start at 100. The reason isn't generosity — it's a design choice about who we want to work with. Indie sculptors and small art-toy studios are where most great design comes from, and a 1,000-unit MOQ kills 90% of those projects before they start.",
      "A 100-unit run lets you test demand without burning $15,000. If your character sells out, you re-order 500 with confidence. If it doesn't, you've spent $1,500–$3,000 — recoverable, painful, but not bankruptcy-level. That's the rational risk profile for an artist's first drop.",
      "The trade-off you accept at 100 units: per-unit cost is 30–40% higher than at 500. The mold setup cost is the same regardless of volume, so it gets amortized over fewer pieces. Plan your retail price around this — usually 4–5x cost is the sweet spot for designer toys at small scale.",
      "Packaging matters more at low volume than you'd think. A 100-unit run with cheap blister packaging looks like a knockoff. A 100-unit run with a printed window box, a numbered card, and a wax-sealed envelope feels like a $99 collector item — even if it's $39 retail. Spend $4 of your $10 unit cost on packaging, not less.",
      "What we typically suggest for first-time indie clients: 100 pieces, full color, simple but premium-feel packaging, sold as a numbered limited edition. If it sells through, the second run is 300–500 with the same molds (free), better margins, and a built-in story for marketing the next character.",
    ],
  },
  {
    slug: "polyurethane-vs-polystone",
    image: "/pictures/jpg/IMG_2592.jpg",
    dictKey: 1,
    date: "2026-04-14",
    intro:
      "Polyurethane resin and polystone look identical in photos. They feel completely different in your hand. Here's how to choose.",
    paragraphs: [
      "Polyurethane (PU) resin is the default choice for most figures we cast. It's lightweight (~1.1 g/cm³), takes paint beautifully, holds fine sculpt detail down to 0.2mm, and is durable enough to survive a drop from waist height onto carpet. The downside: it's plastic. Hold a PU figure and a polystone figure of identical size, and the PU one feels lighter, hollower, less premium.",
      "Polystone is PU resin mixed with finely ground stone powder (usually calcium carbonate). The result is roughly 2× heavier (~2.2 g/cm³) and feels distinctly cold to the touch — closer to ceramic or marble than plastic. Collectors of premium statues ($200+) actively prefer polystone for this reason. It also takes a different paint finish — more matte, more 'museum piece' than 'toy.'",
      "Polystone has trade-offs. It's brittle. A polystone statue dropped from desk height will chip; the same fall in PU just bounces. Polystone is also harder to sculpt detail into below ~0.5mm — the stone particles fight the fine line work. And it costs ~25% more in material and is slower to cast (longer cure time).",
      "Our rule of thumb: anything under $79 retail and any figure aimed at younger collectors — PU. Anything over $149 aimed at adult collectors who want a 'shelf-piece' feel — polystone. Between $79 and $149, ask the client what their reference is: if they're benchmarking against Pop Mart or Funko, PU; if they're benchmarking against Sideshow or Prime 1, polystone.",
      "If you're not sure, we'll cast you one of each from the same master mold (small surcharge) so you can hold both before committing the production run.",
    ],
  },
  {
    slug: "north-park-mascot-launch",
    image: "/pictures/jpg/custom-resin-figurines-collection.jpg",
    dictKey: 2,
    date: "2026-04-02",
    intro:
      "How a regional retail chain turned a 12-year-old mascot drawing into a 1,200-piece resin statue series for their flagship store launch.",
    paragraphs: [
      "North Park is a regional outdoor-goods retailer in the Pacific Northwest. Their mascot — a friendly bear in a flannel shirt — has been on signage, hangtags, and the back of every employee t-shirt since 2012. Last year they decided to celebrate their 25th anniversary by making the bear into a real statue, sold at register and given as a gift to top loyalty members.",
      "The brief: 1,200 pieces, 8-inch standing pose, hand-painted, premium feel (this is going on collector shelves, not in toy aisles), boxed with custom packaging, ready in 90 days for the anniversary event. Budget: under $35 per finished unit landed in their warehouse.",
      "First challenge: their existing mascot art was a 2D vector illustration designed for stickers — front view only. We had to invent the back of the bear, design the 3D pose, and decide how to translate flat-color shading into a paintable resin surface. Three rounds of digital sculpting and one printed proof later, the client signed off.",
      "Production was four batches of 300 units each, spaced 2 weeks apart. We split the painting team into two crews so the entire run had consistent color (color-drift across batches is the silent killer of brand merchandise). QA rejected and re-painted ~7% of pieces, which is normal for hand-painted resin.",
      "The launch sold out the in-store inventory in 11 days. They've since re-ordered twice — same molds, same painters, same quality. That re-order rate is what we're really designing for: not just shipping the first batch, but making sure batch four looks identical to batch one.",
    ],
  },
  {
    slug: "recycled-resin-2025-numbers",
    image: "/pictures/jpg/IMG_2580.jpg",
    dictKey: 3,
    date: "2026-03-18",
    intro:
      "We've been blending recycled resin into our production stream since early 2024. Here's what we learned and what the numbers actually look like.",
    paragraphs: [
      "First, the honest part: 'recycled resin' in our case means casting waste — the sprues, support material, and overpours that we used to throw away. We grind it down, blend it back into virgin resin at up to 15% by weight, and re-cast. We don't (yet) accept post-consumer returns. That's a much harder problem.",
      "In 2025 we processed about 1.4 tons of casting waste back into production. That's roughly 11% of our total resin consumption, which means we used 11% less virgin resin than we would have without the program. Direct cost savings: roughly $4,800. Modest, but the equipment paid for itself in 18 months.",
      "Quality impact: zero detectable difference in the finished figures. We tested by casting 50 identical figures from 100% virgin resin and 50 from the 15% blend, then asked our QA team to sort them blind. They sorted at chance. Tensile strength tested within 4% of virgin — well within batch-to-batch variation.",
      "What didn't work: trying to push the recycled blend above 20%. At that ratio we started seeing color drift in light pastels (recycled material is mostly beige) and longer cure times. We've settled on 15% as the sustainable maximum without quality compromise.",
      "Next year we're testing a 'closed-loop' option for clients who want it: we'll take back unsold inventory or returns from your warehouse, grind it, and credit the recycled mass against your next order. Early conversations with two retail partners. If you're interested, mention it on your next quote and we'll add the math to the proposal.",
    ],
  },
  {
    slug: "airbrush-vs-hand-brush",
    image: "/pictures/jpg/IMG_2616.jpg",
    dictKey: 4,
    date: "2026-03-05",
    intro:
      "When to airbrush, when to hand-brush, when to combine. The painting choice that decides whether your figure looks $30 or $300.",
    paragraphs: [
      "Airbrush is for large, smooth color fields and gradients — skin, sky, base coats, ambient shadows. It lays down 3–5 layers of thin pigment that mix optically into a finish you simply cannot get with a brush. A well-airbrushed face looks alive. A brushed face looks painted.",
      "Hand brush is for everything tight: eyes, lips, fabric folds, accessories, weapon detail, eyebrow strokes. The control of a 0.5mm brush at 2× magnification beats any airbrush at this scale. Painters typically use 5–10 different brush sizes per figure, switching tools 30+ times per piece.",
      "The combination is where great resin figures live. A typical workflow: 1) airbrush the primer base coat, 2) airbrush the skin tones with shading, 3) hand-brush the eyes and mouth, 4) hand-brush the costume detail with washes for shadow recess, 5) airbrush a final unifying glaze for color cohesion, 6) optional matte/satin sealant.",
      "What we won't do: 'all hand-brush' for a $40 figure. The labor cost destroys the unit economics. We also won't do 'all airbrush' for a face — the eyes will read as flat dots and collectors notice immediately.",
      "If a client tells us 'we want it all hand-painted' we usually translate that to 'we want it visibly hand-painted in the places that show.' That's our default. The base under the figure can be airbrushed; the figure's eyes never can be.",
    ],
  },
  {
    slug: "esports-team-resin-drops",
    image: "/pictures/jpg/img_2738.jpg",
    dictKey: 5,
    date: "2026-02-19",
    intro:
      "Why e-sports teams are increasingly using custom resin figures as merch drops — and what works at retail vs. as a player-only gift.",
    paragraphs: [
      "E-sports merch is dominated by t-shirts and jerseys with 60–70% margin and zero personality. Resin figures sit at the opposite end: 25–35% margin but a much stronger emotional pull, and they end up on streamer-room shelves where they're visible for years. We've made figures for 14 e-sports orgs in the past 24 months.",
      "What works at retail: chibi-style mascots, 4–6 inches tall, colorful, $39–$59 retail. Often packaged blind-box style with 6 variants per series (one per main team color, plus a 1-in-30 'gold edition'). Sells through fan stores and limited drops on team websites.",
      "What works as player-only or VIP gifts: 1/7 scale realistic statues of individual star players in their iconic pose. These are not retail products — they're 50-piece runs given to players, partners, and top-tier sponsors. Cost per unit is $80–$200; perceived value is much higher because they cannot be bought.",
      "The mistake we see most often: orgs trying to sell 1/7 scale realistic player statues at retail. The unit cost is too high, the niche is too narrow (only that player's biggest fans want it), and inventory sits. The chibi route at retail + statue route as gifts is the consistent winning playbook.",
      "Lead time for an e-sports drop is the hard constraint. Players retire, get traded, change teams. From sculpt to ship is typically 12 weeks. If you want figures of your current roster ready for a championship in March, we need the player photo brief by early December. Plan accordingly.",
    ],
  },
  {
    slug: "sketch-to-master",
    image: "/pictures/jpg/IMG_2629.jpg",
    dictKey: 6,
    date: "2026-05-04",
    intro:
      "What actually happens between a back-of-napkin drawing and a production-ready resin master? Seven steps, two weeks, and a lot of small decisions you only notice if something goes wrong.",
    paragraphs: [
      "Most clients send us one of three things: a hand sketch on paper, a flat 2D illustration, or a low-poly 3D file from a game engine. Whichever it is, our first job is the same — translate the silhouette into a sculpt that survives both molding and mass production. That translation is where 80% of the quality of the final figure is decided.",
      "Step one is the brief call. We talk through scale (1/8, 1/7, 1/6, chibi, palm-size), pose, accessories, and which IP/character rights apply. We also ask about the customer's intended retail price, because that drives the level of paint detail and packaging we recommend. A $29 desk figure and a $299 collector statue have very different production paths.",
      "Step two is the digital sculpt in ZBrush. Our head sculptor blocks out the rough mass first, then refines silhouette before any surface detail. We send the client a 360° turntable render after about 4 working days. This is the cheapest moment to change anything, so we ask for opinionated feedback.",
      "Step three is the cut. A figure isn't a single solid piece — it's planned from the start to break into 6–14 separate pieces (head, torso, two arms, two legs, hair pieces, accessories) so each part can be molded with no undercuts. Bad cuts force seam lines down the middle of the face. Good cuts hide them under collars, behind hair, in armpits.",
      "Step four is the resin print. We 3D-print each piece on industrial DLP printers, sand the layer lines smooth, then do a second silicone-mold pull from the printed master. This 'second master' is what we use to make the production silicone molds — protecting the original from wear.",
      "Step five is the test cast. We pour one resin copy in raw beige, hand it to the head painter, and let them paint the first 'master sample.' Painting reveals problems the sculpt didn't — undercuts that trap paint, surfaces too smooth for a wash to grip. We loop back to the sculpt if needed.",
      "Step six is the master sample sign-off. We ship the painted master to the client. They look at it under their own lighting, hold it in their own hand, photograph it for their marketing. They sign off on color, weight, finish. This is the contractual reference for the whole production run.",
      "Step seven is mass production planning. We calculate how many silicone molds we need (each mold is good for ~80 pulls), order resin, schedule the painters, build the inner tray, finalize the box artwork. From sign-off to first ship date is typically 28–35 days for runs under 1,000 units.",
      "If you're starting your first resin project — sketch in hand, no idea what comes next — that's the path. Send us the sketch. We'll get back within 24 hours with a free 3D mockup and a transparent quote, and you can decide from there.",
    ],
  },
  {
    slug: "sample-development-process",
    image: "/blog/new-sample-final-product.jpg",
    dictKey: 8,
    date: "2026-08-13",
    intro:
      "From design to physical sample: the complete resin figurine sampling process. 11 steps, 2 key approval milestones, 12-15 days.",
    paragraphs: [
      "Every figurine project starts with a design. But what happens between the design and the physical sample? Many clients ask us: 'Can you make exactly what I want?' The answer is: through a strict sampling process with two key approval milestones, we ensure the final sample meets your expectations.",
      "In this article, we break down every step of the figurine sampling process.",
      "## Sampling Process Overview",
      "Requirement Discussion → Price Negotiation → 3D Sculpting → [Approval Milestone ①] → 3D Printing → Sanding → Silicone Mold Making → Casting → Hand Painting → [Approval Milestone ②] → Drying → Sample Complete",
      "Total sampling cycle: 12-15 days",
      "## Step 1: Requirement Discussion (Day 1)",
      "The process starts with a conversation. You send us your design, and we discuss:",
      "• Product size: 10cm or 30cm? • Purpose: retail, corporate gifts, or promotional items? • Safety certifications needed: CE, EN71, or ASTM? • Order quantity: 100 pieces for testing or 10,000 for mass production?",
      "At this stage, we recommend providing as much reference information as possible: design files, three-view drawings, color references, or even photos of similar products. The more complete the information, the lower the communication cost later.",
      "## Step 2: Price Negotiation (Day 1-2)",
      "After understanding your requirements, we provide a detailed quote within 24 hours, including:",
      "• 3D Sculpting Fee (one-time fee) • Physical Sample Development Fee (refundable on bulk order) • Unit Price (based on order quantity) • DDP Shipping Cost (including freight and customs duties) • Estimated Delivery Time",
      "Once you accept the quote and pay the sampling fee, we officially enter the sampling phase.",
      "## Step 3: 3D Digital Sculpting (Day 3-7)",
      "Our head sculptor opens ZBrush and creates a 3D model from your concept art. The sculptor considers not just 'does it look good'—he's planning:",
      "• Where to split parts to avoid seam lines on the face? • Where to thicken to prevent breakage during shipping? • Where to leave grooves so the painter won't curse?",
      "⚠️ This stage allows adjustments: If you feel the shape is wrong, proportions are off, or details are insufficient, you can request modifications. Changing the 3D model takes only minutes and costs very little.",
      "## [Milestone ①] 3D Effect Approval (Day 7)",
      "We send you 360° rotating renders showing every angle. This is the first key approval point. You need to carefully check:",
      "• Does the shape match the design? • Are the proportions correct? • Are the details in place? • Are you satisfied with the color scheme?",
      "After approval, we move to 3D printing. Important note: You can adjust both shape and color during the 3D stage. Once we enter 3D printing, the shape cannot be changed. Please confirm all details at this stage.",
      "## Step 4: 3D Printing (Day 8-9)",
      "After 3D sculpting approval, we print on industrial DLP printers at 0.05mm layer resolution.",
      "About printing materials: The industry typically offers two options—",
      "• White wax: Cheap, but has many water marks and rough surface • Red wax: Expensive, but high print quality with smooth, fine surface",
      "Unless the client has a very low budget, we generally use red wax. Red wax produces higher quality prototypes with less sanding work required, resulting in better mold precision. This is money well spent.",
      "## Step 5: Sanding the 3D Print (Day 9-10)",
      "Red wax prints have fewer water marks than white wax, but still need work. Our craftsmen hand-sand the surface until it's smooth as silk. This step determines the final product's feel and texture.",
      "## Step 6: Silicone Mold Making (Day 10-11)",
      "We create high-quality silicone molds from the sanded 3D print. Mold design is a craft—good mold design hides seam lines under collars, behind hair, or in natural shadow areas, making them nearly invisible to the naked eye.",
      "## Step 7: Casting (Day 11-12)",
      "Our craftsmen hand-pour liquid polystone material into the molds. Each product is individually cast—one hand holds the mold, the other pours the resin, while gently shaking to eliminate air bubbles.",
      "Polystone material characteristics: • Weight: ~2.2 g/cm³ (twice as heavy as regular PU resin) • Feel: Cold, like ceramic or marble • Texture: Museum-grade collector quality • Detail: Can capture details down to 0.5mm",
      "Polystone is the preferred material for collector-grade figurines, suitable for retail products priced at $149+.",
      "## Step 8: Hand Painting (Day 12-14)",
      "This is where the magic happens. Our painters use a combination of techniques:",
      "• Airbrush: Base coats, skin tones, gradients, ambient shadows • Hand brushes: Eyes, lips, costume details, accessories • Washes: Shadow recesses for depth • Sealants: Matte or satin finish",
      "Painting eyes is the most challenging part. For 8-15cm small products, the eyes are only a few millimeters wide, but our painters can use a 0.5mm brush to paint pupils, irises, and even highlight points. This is why our figurines look 'alive'—because the eyes have soul.",
      "## [Milestone ②] Painting Effect Approval (Day 14)",
      "We send you photos and videos of the painted sample. This is the second key approval point. You need to check:",
      "• Does the color match expectations? • Are the painting details in place? • Are you satisfied with the overall effect?",
      "Important note: At this stage, you can only adjust colors, not the shape. That's why you should finalize the shape during the 3D approval stage.",
      "## Step 9: Drying and Completion (Day 15)",
      "After confirmation, the sample enters the drying phase. Once dried, the sample is ready to ship to you.",
      "## Communication: WhatsApp vs Email",
      "During sampling, close communication between client and supplier is essential. We recommend:",
      "Recommended: WhatsApp • Real-time communication, fast response • Can send photos and videos directly • Suitable for quick detail confirmations",
      "Also acceptable: Email • Suitable for formal confirmations and documentation • But requires frequent back-and-forth, longer communication cycles",
      "Whichever method we use, our goal is to ensure every stage meets your expectations and avoid rework.",
      "## Case Study: From Design to Physical Product",
      "Below is a real sampling case:",
      "Image 1: Client's design drawing Image 2: 3D modeling render Image 3: Physical sample photo",
      "From design to physical product, we strictly follow the sampling process to ensure the final effect meets client expectations.",
      "## Sampling Process Summary",
      "Stage | Time | Adjustable Content 3D Sculpting | Day 3-7 | Shape + Color After 3D Printing | Day 8-15 | Color only",
      "Key principle: The earlier you confirm, the lower the cost. Please finalize the shape during the 3D stage.",
      "## Ready to Start Your Project?",
      "If you have a character design and want to see it as a physical resin figurine, we'd love to help. Send us your concept art and we'll provide:",
      "• Free quote within 24 hours • 12-15 day fast sampling • MOQ from 100 pieces",
      "Contact us: henry@resin-factory.com or add WhatsApp: +86-136-8269-2148",
    ],
    imageBlocks: [
      {
        afterParagraph: 50,
        images: [
          { src: "/blog/new-sample-design.jpg", alt: "Client's design drawing", caption: "Client's design" },
          { src: "/blog/new-sample-3d-render.jpg", alt: "3D modeling render", caption: "3D render" },
          { src: "/blog/new-sample-final-product.jpg", alt: "Physical sample", caption: "Final product" }
        ]
      }
    ],
  },
  {
    slug: "small-stone-statues-weathering-texture",
    image: "/blog/stone-real-photo.jpg",
    dictKey: 7,
    date: "2026-08-11",
    intro:
      "For 8-15cm stone-look Buddha statues and sculptures, most manufacturers focus on perfect shape replication. But the real secret to authenticity isn't the carving — it's the weathered, granular texture that mimics centuries of natural erosion. Here's why that matters and how we achieve it.",
    paragraphs: [
      "Walk through the Bamiyan Valley in Afghanistan, the Yungang Grottoes in China, or the Borobudur Temple in Indonesia, and you'll see the same thing: stone Buddha statues that have stood for centuries. Their surfaces are not smooth. They're pitted, granular, weathered by wind, rain, and time. That texture isn't damage — it's authenticity. It's what makes these sculptures feel real, sacred, and timeless.",
      "Now consider the small stone-look products we make for tourist souvenirs, museum replicas, or promotional gifts — typically 8-15cm tall. Most manufacturers approach this the wrong way. They focus entirely on shape: perfect carving, smooth surfaces, sharp details. The result? A product that looks like plastic painted to look like stone. It feels fake in your hand. It looks like a toy, not a sculpture.",
      "The problem isn't the carving. The problem is the missing texture. Real stone weathers. Real stone has granular surfaces, tiny pits, and uneven color absorption. When you replicate a 1,000-year-old Buddha statue but leave the surface perfectly smooth, you're not capturing its essence — you're capturing a lie.",
      "Here's the truth: for small stone-look products, the weathering texture matters more than the carving precision. A slightly imperfect carving with realistic weathering will always look more authentic than a perfect carving with a smooth surface. The granular texture is what tells the viewer's brain: 'This is stone. This is old. This is real.'",
      "Let me show you what I mean. Below are three images: a real product photo, a 3D model without weathering texture, and a 3D model with weathering texture. These are 3D renders, not actual products — but they illustrate the difference clearly.",
      "The left image shows a real stone statue with natural weathering. Notice the granular surface, the tiny pits, the uneven color. The middle image is a 3D model of the same statue — perfect carving, but no texture. It looks like a toy. The right image is the same 3D model with weathering texture added. Now it looks like stone. The difference isn't in the shape — it's in the surface.",
      "How do we achieve this texture in small products? We use a combination of techniques: sandblasting to create the granular base, acid etching to deepen the pits, and hand-painting with mineral-based pigments that absorb unevenly into the surface. It's more labor-intensive than smooth painting, but the result is a product that feels like it was carved from real stone — because it looks like it's been through centuries of history.",
      "If you're producing small stone-look Buddha statues or sculptures for tourist markets, museum shops, or cultural promotions, don't fall into the 'perfect carving' trap. Your customers aren't looking for perfection — they're looking for authenticity. They want to hold a piece of history in their hands, not a plastic toy. The weathering texture is what makes that happen. It's the difference between 'looks like stone' and 'feels like stone.' And in the souvenir business, feeling real is everything.",
    ],
    imageBlocks: [
      {
        afterParagraph: 5,
        images: [
          { src: "/blog/stone-real-photo.jpg", alt: "Real stone statue with weathered texture", caption: "Real product" },
          { src: "/blog/stone-3d-no-texture.jpg", alt: "3D model without weathering - smooth surface", caption: "3D model without texture" },
          { src: "/blog/stone-3d-with-texture.jpg", alt: "3D model with weathering texture - granular surface", caption: "3D model with texture" }
        ]
      }
    ],
  },
];

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
