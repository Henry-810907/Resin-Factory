export interface Product {
  id: number;
  name: string;
  material: string;
  size: string;
  moq: string;
  price: string;
  image: string;
  features: string[];
  applications: string[];
  considerations: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Resin Crafts",
    material: "Polystone (resin + stone powder mixture)",
    size: "5-50 cm",
    moq: "100 pcs",
    price: "$$ Medium",
    image: "/product-guide/resin-crafts.jpg",
    features: [
      "Ultra-realistic details",
      "Premium weight and feel",
      "Durable for long-term display",
      "Smooth finish",
      "Versatile for painting and finishing"
    ],
    applications: [
      "Collectibles",
      "Corporate gifts",
      "Home decor",
      "Tourism souvenirs",
      "Sculpture replicas"
    ],
    considerations: [
      "Not suitable for flexible designs or extremely thin parts (<2mm)",
      "Heavier than plastic alternatives",
      "Ideal for designs 5-50cm with intricate details. For flexible or ultra-lightweight requirements, consider alternative materials"
    ]
  },
  {
    id: 2,
    name: "Resin Home Decor Items",
    material: "Polystone (resin + stone powder mixture)",
    size: "10-50 cm",
    moq: "100 pcs",
    price: "$$ Medium",
    image: "/product-guide/resin-home-decor.jpg",
    features: [
      "Ultra-realistic details",
      "Premium weight and feel",
      "Durable for long-term display",
      "Versatile designs"
    ],
    applications: [
      "Photo frames",
      "Clocks",
      "Vases",
      "Trays",
      "Tissue boxes"
    ],
    considerations: [
      "Not suitable for flexible designs",
      "Heavier than plastic alternatives",
      "Fragile during shipping",
      "Ideal for designs 10-50cm with intricate details. For flexible or ultra-lightweight requirements, consider alternative materials"
    ]
  },
  {
    id: 3,
    name: "Resin Office Supplies",
    material: "Polystone (resin + stone powder mixture)",
    size: "8-30 cm",
    moq: "100 pcs",
    price: "$$ Medium",
    image: "/product-guide/resin-office-supplies.jpg",
    features: [
      "Ultra-realistic details",
      "Premium weight and feel",
      "Professional appearance",
      "Custom designs"
    ],
    applications: [
      "Pen holders",
      "Bookends",
      "Business card holders",
      "Paperweights"
    ],
    considerations: [
      "Not suitable for flexible designs",
      "Heavier than plastic alternatives",
      "Fragile during shipping",
      "Ideal for designs 8-30cm with intricate details. For flexible or ultra-lightweight requirements, consider alternative materials"
    ]
  },
  {
    id: 4,
    name: "3D Printing & Hand-Painted Models",
    material: "Standard Resin / Castable Resin (SLA 3D printing)",
    size: "5-20 cm",
    moq: "1-100 pcs",
    price: "$$$ High",
    image: "/product-guide/3d-printing-models.jpg",
    features: [
      "Fast turnaround",
      "High precision",
      "Suitable for design validation",
      "Can be hand-painted for realistic finish",
      "Perfect for design validation before mass production"
    ],
    applications: [
      "Design validation",
      "Prototyping",
      "Small batch custom",
      "Complex design testing",
      "Pre-production sampling"
    ],
    considerations: [
      "Higher cost per unit for large quantities",
      "Surface finish may require additional hand-painting"
    ]
  },
  {
    id: 5,
    name: "Flexible Rubber Keychains & Ornaments",
    material: "Soft PVC (polyvinyl chloride)",
    size: "5-12 cm",
    moq: "100 pcs",
    price: "$ Low",
    image: "/product-guide/flexible-rubber-keychains.jpg",
    features: [
      "Eraser-like texture",
      "Lightweight",
      "Waterproof",
      "Vibrant colors",
      "Durable for daily use"
    ],
    applications: [
      "Keychains",
      "Badges",
      "Promotional items",
      "Desk ornaments",
      "Phone stands"
    ],
    considerations: [
      "Not suitable for ultra-fine details or sizes over 12cm",
      "Limited to smaller, simpler designs"
    ]
  },
  {
    id: 6,
    name: "Large Mascots/Statues",
    material: "Fiberglass Reinforced Plastic (FRP)",
    size: "100-1000 cm",
    moq: "1 pc",
    price: "$$$$ Very High",
    image: "/product-guide/large-mascots-statues.jpg",
    features: [
      "Impressive scale",
      "Weather-resistant",
      "Durable for outdoor use",
      "Eye-catching presence",
      "Lightweight yet strong (much lighter than stone, easier to transport and install)"
    ],
    applications: [
      "Commercial displays",
      "Event decor",
      "Theme parks",
      "Brand activations"
    ],
    considerations: [
      "Requires significant space and logistics planning",
      "High shipping costs due to size",
      "Recommended when design exceeds 100cm or requires outdoor durability beyond resin capabilities"
    ]
  },
  {
    id: 7,
    name: "Mascot Costumes",
    material: "Fabric, foam, plastic frame",
    size: "150-220 cm",
    moq: "1 set",
    price: "$$$ High",
    image: "/product-guide/mascot-costumes.jpg",
    features: [
      "Wearable design",
      "Breathable materials",
      "Moderate detail reproduction",
      "Custom-fit options"
    ],
    applications: [
      "Event performances",
      "Commercial promotions",
      "Festivals",
      "Theme parks"
    ],
    considerations: [
      "Hot in summer months",
      "Limited mobility for wearer",
      "Requires careful storage",
      "Detail reproduction is moderate compared to hard materials"
    ]
  },
  {
    id: 8,
    name: "Inflatable Props",
    material: "PVC tarpaulin or nylon",
    size: "100-3000 cm",
    moq: "1 pc",
    price: "$$$ High",
    image: "/product-guide/inflatable-props.jpg",
    features: [
      "Lightweight",
      "Easy to transport and store",
      "High visual impact",
      "Quick setup"
    ],
    applications: [
      "Event decor",
      "Commercial promotions",
      "Photo props",
      "Brand activations"
    ],
    considerations: [
      "Limited surface detail due to inflated nature",
      "Requires air pump",
      "Not suitable for ultra-realistic designs",
      "Best for temporary events or when portability is priority"
    ]
  },
  {
    id: 9,
    name: "Metal Pins/Fridge Magnets",
    material: "Zinc alloy, iron, or stainless steel",
    size: "2-10 cm",
    moq: "50 pcs",
    price: "$ Low",
    image: "/product-guide/metal-pins-fridge-magnets.jpg",
    features: [
      "Flat and durable",
      "Premium metallic finish",
      "Long-lasting",
      "Professional appearance"
    ],
    applications: [
      "Corporate gifts",
      "Souvenirs",
      "Promotional items",
      "Collectibles"
    ],
    considerations: [
      "Limited to flat or low-relief designs",
      "Heavier than plastic alternatives",
      "Minimum size constraints"
    ]
  },
  {
    id: 10,
    name: "Glass/Crystal Products",
    material: "Glass or optical crystal",
    size: "10-30 cm",
    moq: "100 pcs",
    price: "$$ Medium",
    image: "/product-guide/glass-crystal-products.jpg",
    features: [
      "Transparent and premium",
      "Light-reflecting properties",
      "Elegant appearance",
      "Durable for display"
    ],
    applications: [
      "High-end gifts",
      "Souvenirs",
      "Architectural models",
      "Large object models"
    ],
    considerations: [
      "Fragile and requires careful handling",
      "Higher cost",
      "Limited to specific design types"
    ]
  },
  {
    id: 11,
    name: "Plush Toys",
    material: "Plush fabric, PP cotton filling",
    size: "8-50 cm",
    moq: "100 pcs",
    price: "$ Low",
    image: "/product-guide/plush-toys.jpg",
    features: [
      "Soft and cuddly",
      "Lightweight",
      "Washable",
      "Child-safe materials",
      "Comforting texture"
    ],
    applications: [
      "Children's toys",
      "Gifts",
      "Promotional items",
      "Brand mascots"
    ],
    considerations: [
      "Limited detail compared to hard materials",
      "Requires careful design for manufacturing",
      "Larger sizes increase cost significantly",
      "Essential when tactile softness and child-safety are primary requirements"
    ]
  },
  {
    id: 12,
    name: "Premium Collectible Toys",
    material: "ABS plastic",
    size: "8-20 cm",
    moq: "10000+ pcs",
    price: "$$$ High",
    image: "/product-guide/premium-collectible-toys.jpg",
    features: [
      "High-quality finish",
      "Durable for long-term collection",
      "Detailed painting",
      "Premium packaging options"
    ],
    applications: [
      "Collectibles",
      "Limited editions",
      "IP derivatives",
      "Premium gifts"
    ],
    considerations: [
      "High mold and sampling costs",
      "Longer development time",
      "Requires detailed design specifications",
      "Minimum 10000 pcs recommended for cost-effectiveness"
    ]
  },
  {
    id: 13,
    name: "Budget-Friendly Collectible Toys",
    material: "Vinyl (PVC)",
    size: "15-60 cm",
    moq: "500 pcs",
    price: "$ Low",
    image: "/product-guide/budget-collectible-toys.jpg",
    features: [
      "Cost-effective production",
      "Decent detail quality",
      "Lightweight",
      "Suitable for mass distribution"
    ],
    applications: [
      "Mass market toys",
      "Promotional items",
      "Giveaways",
      "Bulk orders"
    ],
    considerations: [
      "Lower detail quality compared to premium options",
      "Limited customization for small batches"
    ]
  },
  {
    id: 14,
    name: "Squishy Stress-Relief Toys",
    material: "PU foam (polyurethane)",
    size: "8-20 cm",
    moq: "500 pcs",
    price: "$ Low",
    image: "/product-guide/squishy-stress-relief-toys.jpg",
    features: [
      "Soft and squeezable",
      "Slow-rebound texture",
      "Stress-relieving",
      "Child-safe materials"
    ],
    applications: [
      "Stress relief",
      "Children's toys",
      "Promotional items",
      "Fidget toys"
    ],
    considerations: [
      "Limited detail due to soft material",
      "Higher MOQ required",
      "Design must accommodate squishy nature"
    ]
  },
  {
    id: 15,
    name: "Halloween Masks & Special Effects Props",
    material: "Latex or silicone",
    size: "25-35 cm",
    moq: "100 pcs",
    price: "$ Low",
    image: "/product-guide/halloween-masks-props.jpg",
    features: [
      "Stretchable material",
      "Realistic textures",
      "Lightweight for wearing",
      "Durable for events"
    ],
    applications: [
      "Festival costumes",
      "Cosplay",
      "Film props",
      "Halloween events"
    ],
    considerations: [
      "Limited breathability for extended wear",
      "Requires careful sizing",
      "May have strong initial odor"
    ]
  },
  {
    id: 16,
    name: "Plaster Ornaments & Decorative Pieces",
    material: "Gypsum plaster",
    size: "15-100 cm",
    moq: "100 pcs",
    price: "$$ Medium",
    image: "/product-guide/plaster-ornaments.jpg",
    features: [
      "Classic matte finish",
      "Lightweight",
      "Easy to paint",
      "Vintage aesthetic appeal"
    ],
    applications: [
      "Christmas ornaments",
      "Easter decorations",
      "Wedding favors",
      "Home accents",
      "Seasonal displays"
    ],
    considerations: [
      "Fragile and requires careful handling",
      "Not suitable for outdoor use",
      "Limited to indoor decorations"
    ]
  },
  {
    id: 17,
    name: "Stone Carvings/Outdoor Landscapes",
    material: "Natural stone (marble, granite, limestone, etc.)",
    size: "100-1000 cm",
    moq: "1 pc",
    price: "$$$$ Very High",
    image: "/product-guide/stone-carvings.jpg",
    features: [
      "Natural stone texture",
      "Extremely durable and weather-resistant",
      "Permanent outdoor performance",
      "Premium authentic appearance",
      "Resistant to UV and temperature changes"
    ],
    applications: [
      "Garden landscapes",
      "Public art",
      "Architectural decor",
      "Outdoor installations"
    ],
    considerations: [
      "Extremely heavy with very high shipping costs",
      "Limited design flexibility due to material hardness",
      "Longer production time",
      "Difficult to modify once carved",
      "Requires professional installation"
    ]
  },
  {
    id: 18,
    name: "3D Cartoon Device Stands",
    material: "Soft PVC + ABS",
    size: "20-60 cm",
    moq: "100 pcs",
    price: "$$ Medium",
    image: "/product-guide/3d-cartoon-device-stands.jpg",
    features: [
      "Custom 3D character designs",
      "Stable and durable",
      "Functional and decorative",
      "Brand promotion tool"
    ],
    applications: [
      "Phone/tablet stands",
      "Desk accessories",
      "Corporate gifts",
      "Promotional items"
    ],
    considerations: [
      "Requires mold for custom designs",
      "Limited to smaller sizes (<60cm)",
      "Design must ensure stability"
    ]
  },
  {
    id: 19,
    name: "Wooden Decor & Art Pieces",
    material: "Natural wood (MDF, solid wood, etc.)",
    size: "20-80 cm",
    moq: "100 pcs",
    price: "$$$ High",
    image: "/product-guide/wooden-decor.jpg",
    features: [
      "Natural material appeal",
      "Warm texture",
      "Eco-friendly perception",
      "Handcrafted quality"
    ],
    applications: [
      "Home decor",
      "Gifts",
      "Art pieces",
      "Natural-themed products"
    ],
    considerations: [
      "Limited detail compared to resin",
      "Susceptible to moisture and temperature changes",
      "Higher cost for complex designs"
    ]
  },
  {
    id: 20,
    name: "Pottery & Ceramic Decor",
    material: "Ceramic, porcelain, or earthenware",
    size: "15-40 cm",
    moq: "500 pcs",
    price: "$$$ High",
    image: "/product-guide/pottery-ceramic.jpg",
    features: [
      "Classic aesthetic",
      "Food-safe options",
      "Durable for display",
      "Versatile for painting and glazing"
    ],
    applications: [
      "Home decor",
      "Tableware",
      "Art pieces",
      "Traditional crafts"
    ],
    considerations: [
      "Fragile and requires careful handling",
      "Limited design flexibility",
      "Longer production time for custom glazes"
    ]
  },
  {
    id: 21,
    name: "3D Cartoon Charging Cables",
    material: "Soft PVC + Metal connectors",
    size: "10-20 cm",
    moq: "500 pcs",
    price: "$$ Medium",
    image: "/product-guide/3d-cartoon-charging-cables.jpg",
    features: [
      "Custom character designs",
      "Functional charging capability",
      "Durable materials",
      "Brand promotion tools"
    ],
    applications: [
      "Corporate gifts",
      "Brand merchandise",
      "Promotional items",
      "Character licensing products"
    ],
    considerations: [
      "Requires IP authorization",
      "Mold costs for custom designs",
      "Minimum order applies per design"
    ]
  }
];
