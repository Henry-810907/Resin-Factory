/**
 * 博客文章正文(英文,所有语言版本共用 — 文章主体内容用 lang="en" 标记)
 * 标题、副标题、tag、日期由各语言字典提供。
 *
 * 添加新文章:
 *  1. 在这里加新条目(slug + image + 段落)
 *  2. 在 i18n/dictionaries/*.json 的 blog.posts 加对应标题/摘要
 *  3. 在 sitemap.ts 的 BLOG_SLUGS 加 slug
 */

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
};

export const FEATURED_SLUG = "why-figurine-eyes-look-unnatural";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: FEATURED_SLUG,
    image: "/blog/eyes-with-lashes.jpg",
    dictKey: "featured",
    date: "2026-08-11",
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
  },
];

export const BLOG_SLUGS = BLOG_POSTS.map((p) => p.slug);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
