// ============================================================
// Product data for HealthPans.com — Non-toxic cookware
// Replace ASIN values with real current ASINs.
// ============================================================

export interface Product {
  id: number; slug: string; name: string; brand: string;
  panType: string; material: string; asin: string;
  price: string; priceRange: "Under $50" | "$50–$100" | "$100–$200" | "$200+";
  rating: number; reviewCount: number; shortDescription: string;
  keyFeatures: string[]; bestFor: string; pros: string[]; cons: string[];
  safetyProfile: string; compatibility: string[];
  howToUse: string; whoItsFor: string; notFor: string;
  faq: { question: string; answer: string }[];
  featured: boolean; rank: number; imageUrl: string; category: string[];
}

export const products: Product[] = [
  {
    id: 1, slug: "lodge-cast-iron-skillet-12",
    name: "12-Inch Cast Iron Skillet", brand: "Lodge", panType: "Cast Iron Skillet",
    material: "Pre-Seasoned Cast Iron", asin: "B00006JSUA",
    price: "$30", priceRange: "Under $50", rating: 4.8, reviewCount: 89400,
    shortDescription: "The gold standard of non-toxic cookware. Lodge's pre-seasoned 12-inch cast iron skillet is 100% natural — no coatings, no PFAS, no chemicals — and it improves with every use for a lifetime.",
    keyFeatures: ["100% natural cast iron — zero synthetic coatings", "Pre-seasoned with 100% vegetable oil", "Lifetime durability — will outlast you", "Compatible with all heat sources including induction", "Made in the USA since 1896"],
    bestFor: "Searing, frying, baking, campfire cooking",
    pros: ["Completely PFAS/PFOA-free — just iron and vegetable oil", "Gets better with use — natural non-stick develops over time", "Under $30 — best value non-toxic cookware on earth", "Made in USA for 130 years", "Induction, oven, campfire compatible"],
    cons: ["Heavy (8.4 lbs) — not ideal for those with wrist issues", "Requires seasoning care and proper drying", "Not dishwasher safe", "Slow to heat; not ideal for delicate sauces"],
    safetyProfile: "100% safe. Cast iron is the original non-toxic cookware — no coatings of any kind. The pre-seasoning is pure vegetable oil baked on. Even if the seasoning is scratched, you're just eating trace amounts of iron (actually beneficial).",
    compatibility: ["Gas", "Electric", "Induction", "Oven", "Campfire", "Broiler"],
    howToUse: "Preheat over medium-low for 3–5 minutes before use (cast iron heats unevenly if rushed). Use a thin coat of oil for cooking. After use, rinse with hot water (no soap or harsh scrubbers), dry thoroughly, and apply a thin oil coat. Store in a dry place.",
    whoItsFor: "Anyone who wants the most durable, non-toxic, versatile pan available. Ideal for searing meat, pan-frying, cornbread, and anyone building a forever kitchen.",
    notFor: "Those cooking delicate fish or eggs before the seasoning is well-developed. Those who want a grab-and-go lightweight pan.",
    faq: [
      { question: "Is cast iron actually non-stick?", answer: "A well-seasoned cast iron pan develops a genuinely non-stick surface over time through polymerized oil layers. It won't be as slippery as Teflon out of the box, but with proper seasoning (6–12 months of use), scrambled eggs will slide right out." },
      { question: "Can I use soap on cast iron?", answer: "Modern dish soap won't ruin your seasoning — old lye-based soaps did, but today's formulas are fine for quick rinses. That said, avoid soaking or dishwasher, as these cause rust." },
      { question: "Does cast iron add iron to food?", answer: "Yes — cooking acidic foods in cast iron (tomatoes, wine sauces) releases small amounts of dietary iron into food. For most people this is a minor nutritional benefit. For those with hemochromatosis (iron overload condition), this is worth discussing with a doctor." },
    ],
    featured: true, rank: 1, imageUrl: "/images/lodge-cast-iron.jpg",
    category: ["cast-iron", "non-toxic", "made-in-usa"],
  },
  {
    id: 2, slug: "greenpan-paris-pro-ceramic",
    name: "Paris Pro 10-Piece Ceramic Non-Stick Set", brand: "GreenPan", panType: "Ceramic Non-Stick",
    material: "Hard Anodized Aluminum + Thermolon™ Ceramic Coating", asin: "B01N2AMGXK",
    price: "$180", priceRange: "$100–$200", rating: 4.5, reviewCount: 8200,
    shortDescription: "The best non-toxic non-stick cookware set in 2026. GreenPan's Thermolon™ ceramic coating is PFAS-free, PFOA-free, and doesn't release toxic fumes — even if accidentally overheated.",
    keyFeatures: ["Thermolon™ ceramic — zero PTFE, PFOA, lead, or cadmium", "Hard anodized body for warp resistance", "10-piece set: 8\" + 10\" skillet, 2qt + 3qt saucepan, 5qt saute, 5qt stockpot + lids", "Oven safe to 600°F", "Dishwasher safe (though hand washing extends life)"],
    bestFor: "Everyday cooking, eggs, fish, sautéing, all non-stick needs without PFAS",
    pros: ["Thermolon™ is genuinely PFAS-free — verified by third-party testing", "Even if overheated, releases no toxic PFOA fumes (unlike Teflon)", "Hard anodized body resists warping better than standard aluminum", "Beautiful grey aesthetic", "Full 10-piece set replaces an entire toxic cookware collection"],
    cons: ["Ceramic non-stick degrades over 2–4 years (vs cast iron's lifetime)", "Not compatible with induction without the induction-specific version", "Higher initial investment than basic non-stick"],
    safetyProfile: "Thermolon™ ceramic coating contains no PTFE (Teflon), PFOA, PFAS, lead, or cadmium. Unlike traditional non-stick, overheating GreenPan does not release perfluorocarbon fumes. Third-party Intertek tested.",
    compatibility: ["Gas", "Electric", "Oven (to 600°F)"],
    howToUse: "Use low to medium heat (ceramic non-stick heats more efficiently than traditional pans). Use silicone or wooden utensils. Hand wash with soft sponge to extend coating life. Avoid aerosol cooking sprays — they leave a residue that degrades ceramic.",
    whoItsFor: "Anyone switching from Teflon/PFAS cookware who wants the familiar non-stick experience without the health concerns. Perfect for everyday cooking of eggs, fish, and delicate foods.",
    notFor: "Those who want lifetime pans (ceramic coatings are not permanent). Induction cooktop users should choose the GreenPan Valencia Pro instead.",
    faq: [
      { question: "Is ceramic coating actually PFAS-free?", answer: "Yes — genuine ceramic coatings like GreenPan's Thermolon™ are silica-based (sand-derived), not fluoropolymer-based. They contain no PTFE, PFOA, or related PFAS chemicals. This is independently verified by testing labs." },
      { question: "How long does ceramic non-stick last?", answer: "With proper care (low-medium heat, no metal utensils, hand washing), ceramic non-stick typically lasts 2–4 years before noticeably degrading. Cast iron and stainless steel last indefinitely — the trade-off for ceramic is convenience vs longevity." },
      { question: "Does ceramic non-stick work without oil?", answer: "Technically yes for short periods, but adding a small amount of butter or oil improves food release and extends the coating's life significantly. Never completely oil-free cook on ceramic long-term." },
    ],
    featured: true, rank: 2, imageUrl: "/images/greenpan-paris-pro.jpg",
    category: ["ceramic", "non-toxic", "non-stick", "set"],
  },
  {
    id: 3, slug: "made-in-carbon-steel-skillet",
    name: "12\" Blue Carbon Steel Skillet", brand: "Made In", panType: "Carbon Steel Skillet",
    material: "Blue Carbon Steel (5-ply heritage)", asin: "B082XHPZRS",
    price: "$139", priceRange: "$100–$200", rating: 4.6, reviewCount: 4800,
    shortDescription: "The professional chef's pan. Carbon steel combines cast iron's non-toxic durability with stainless steel's responsiveness — and it's what French bistros and Michelin-starred kitchens have used for 200 years.",
    keyFeatures: ["100% natural — just carbon and iron, zero synthetic coatings", "2mm thick for professional heat retention", "Pre-seasoned with organic flaxseed oil", "Lighter than cast iron (5.3 lbs vs 8.4 lbs)", "Oven safe to 1200°F"],
    bestFor: "Searing, French omelettes, crepes, high-heat cooking",
    pros: ["Completely PFAS/PFOA-free — no coatings ever", "Lighter than cast iron with similar durability", "Develops superior non-stick with proper seasoning", "Professional kitchen standard — used by chefs worldwide", "Lifetime durability"],
    cons: ["Requires seasoning learning curve", "Reactive to acidic foods until fully seasoned", "More expensive than Lodge cast iron for similar functionality"],
    safetyProfile: "100% safe. Carbon steel is 98–99% iron, 1–2% carbon — no coatings, no PFAS, no chemicals of any kind. Identical safety profile to cast iron.",
    compatibility: ["Gas", "Electric", "Induction", "Oven (to 1200°F)", "Broiler", "Campfire"],
    howToUse: "Season with thin oil coats at 450°F for 30 minutes before first use (repeat 3×). Preheat 2–3 minutes before cooking. After use, rinse hot, dry immediately, apply thin oil coat. The seasoning improves dramatically over the first 20–30 uses.",
    whoItsFor: "Home cooks who want a professional, non-toxic pan that improves with age. Those who want cast iron's safety but prefer a lighter, more responsive pan. Technique-focused cooks.",
    notFor: "Those who want zero learning curve. Carbon steel rewards technique and care; neglect it and it rusts.",
    faq: [
      { question: "What is the difference between cast iron and carbon steel?", answer: "Both are PFAS-free, improve with seasoning, and last a lifetime. Carbon steel is thinner (lighter, more responsive to heat changes), heats more evenly across the surface, and is easier to maneuver. Cast iron is thicker (better heat retention, better for oven use), heavier, and more affordable. French omelettes: carbon steel. Cornbread: cast iron." },
      { question: "Is Made In worth the price over Lodge?", answer: "Made In carbon steel ($139) vs Lodge cast iron ($30) — both are excellent non-toxic choices. The price premium buys you lighter weight, faster responsiveness, better seasoning development, and Made In's premium manufacturing. For most home cooks, the Lodge is enough. For serious cooks who want professional performance, Made In is worth it." },
    ],
    featured: true, rank: 3, imageUrl: "/images/made-in-carbon-steel.jpg",
    category: ["carbon-steel", "non-toxic", "professional"],
  },
  {
    id: 4, slug: "caraway-ceramic-cookware-set",
    name: "Home Cookware Set (7-Piece Ceramic)", brand: "Caraway", panType: "Ceramic Non-Stick Set",
    material: "Aluminum Core + Ceramic Coating", asin: "B0855Q7GGG",
    price: "$395", priceRange: "$200+", rating: 4.6, reviewCount: 6100,
    shortDescription: "The most Instagrammable non-toxic cookware on the market — and genuinely excellent. Caraway's ceramic coating is PFAS-free and the matching storage system has changed how people organize their kitchens.",
    keyFeatures: ["PFAS, PTFE, lead, and cadmium-free ceramic coating", "Aluminum core for fast, even heating", "7-piece set with lids + built-in canvas lid organizer + magnetic pan rack", "Available in 10 colorways", "Oven safe to 550°F"],
    bestFor: "Everyday cooking, organized kitchens, gift giving, aesthetic-forward cooks",
    pros: ["Genuinely stylish — 10 colors, a matched set that looks premium on any stovetop", "Included magnetic storage rack and canvas lid organizer are genuinely useful", "PFAS-free coating independently verified", "Heats quickly and evenly", "Makes a spectacular gift"],
    cons: ["Most expensive set on this list ($395)", "Coating will degrade over 2–4 years like all ceramics", "Not induction compatible"],
    safetyProfile: "Ceramic coating verified free of PFAS, PTFE, PFOA, lead, and cadmium by independent laboratory testing. Caraway publishes their testing certificates publicly.",
    compatibility: ["Gas", "Electric", "Oven (to 550°F)"],
    howToUse: "Low to medium heat. Silicone or wood utensils only. Hand wash for longest coating life. Season the first use with a light oil coat before cooking. Avoid aerosol sprays.",
    whoItsFor: "Design-conscious cooks who want non-toxic cookware and care about aesthetics. Those giving a wedding or housewarming gift. Anyone upgrading an entire kitchen in one purchase.",
    notFor: "Induction cooktop users. Those on a budget. Cooks who prefer lifetime pans over replacement-cycle ceramic.",
    faq: [
      { question: "Is Caraway really non-toxic?", answer: "Yes — Caraway publishes third-party lab testing certificates confirming their ceramic coatings contain no PFAS, PTFE, PFOA, lead, or cadmium. Their marketing claims match their testing results." },
      { question: "How does Caraway compare to GreenPan?", answer: "Both use genuine PFAS-free ceramic coatings. Caraway wins on aesthetics and storage system. GreenPan wins on cookware science credentials (they invented the modern ceramic non-stick category) and price-per-piece. Both are excellent." },
    ],
    featured: true, rank: 4, imageUrl: "/images/caraway-set.jpg",
    category: ["ceramic", "non-toxic", "set", "aesthetic"],
  },
  {
    id: 5, slug: "all-clad-stainless-steel-skillet",
    name: "D3 Stainless 12\" Fry Pan", brand: "All-Clad", panType: "Stainless Steel Skillet",
    material: "3-ply Stainless Steel (18/10 + Aluminum Core)", asin: "B00005AL4E",
    price: "$165", priceRange: "$100–$200", rating: 4.7, reviewCount: 12400,
    shortDescription: "The professional lifetime pan. All-Clad's D3 is 100% stainless steel — no coatings of any kind — and produces the best sear of any pan on this list when used correctly.",
    keyFeatures: ["3-ply: 18/10 stainless exterior + aluminum core + stainless cooking surface", "Zero coatings — pure stainless steel", "Produces exceptional fond (browned bits) for sauces", "Lifetime warranty — made in Canonsburg, PA, USA", "Oven and broiler safe to 600°F"],
    bestFor: "Searing, fond-based sauces, roasting, induction compatibility",
    pros: ["Completely non-toxic — pure stainless steel, zero coatings to degrade or flake", "Lifetime warranty and made in USA", "Best sear surface for meat on this list", "Induction compatible", "Dishwasher safe (though hand wash recommended)"],
    cons: ["Not non-stick — requires technique (proper preheat + oil) to prevent sticking", "Premium price", "Learning curve for those accustomed to non-stick"],
    safetyProfile: "100% safe. 18/10 stainless steel is non-reactive and releases no chemicals into food. The nickel content in 18/10 steel is sealed within the metal — only those with severe nickel allergies should consider alternatives.",
    compatibility: ["Gas", "Electric", "Induction", "Oven (600°F)", "Broiler", "Dishwasher"],
    howToUse: "Preheat over medium heat for 2–3 minutes. Add oil when a drop of water dances and evaporates. Food releases naturally from stainless when properly cooked — don't force it. Deglaze with liquid to loosen any stuck bits (this creates the best pan sauces).",
    whoItsFor: "Serious home cooks who want a lifetime, non-toxic pan with professional performance. Those who cook meat and want the superior fond development only stainless provides.",
    notFor: "Those who need non-stick performance — stainless requires technique. Those cooking delicate fish or eggs without experience.",
    faq: [
      { question: "Is stainless steel cookware non-toxic?", answer: "Yes — 18/10 stainless steel (18% chromium, 10% nickel) is completely inert and non-reactive for virtually all cooking. It does not leach chemicals. The only exception is those with severe nickel sensitivity, who may react to highly acidic foods cooked for long periods in stainless." },
      { question: "Why does food stick to stainless steel?", answer: "Food sticks when the pan isn't properly preheated or isn't at the right temperature when food is added. Properly preheated stainless (use the water droplet test — it should dance and evaporate) releases food naturally after the initial sear. Don't move food until it naturally releases." },
    ],
    featured: true, rank: 5, imageUrl: "/images/all-clad-stainless.jpg",
    category: ["stainless-steel", "non-toxic", "professional", "lifetime"],
  },
  {
    id: 6, slug: "field-company-cast-iron",
    name: "No. 8 Cast Iron Skillet", brand: "Field Company", panType: "Cast Iron Skillet",
    material: "Smooth-Ground Cast Iron", asin: "B07WQDNK13",
    price: "$170", priceRange: "$100–$200", rating: 4.8, reviewCount: 1900,
    shortDescription: "Cast iron reimagined for the modern cook. Field Company machines their cast iron smooth — unlike Lodge's textured surface — for faster seasoning, easier food release, and a lighter weight that changes the game.",
    keyFeatures: ["Smooth machined cooking surface (vs textured Lodge)", "35% lighter than comparable Lodge skillets", "100% natural — just iron, zero coatings", "Made in the USA with American iron", "Lifetime guarantee"],
    bestFor: "Cast iron lovers who want lighter weight and faster non-stick development",
    pros: ["Smooth surface seasons to non-stick much faster than textured cast iron", "35% lighter — a significant ergonomic improvement", "Same safety profile as Lodge (pure iron) at premium build quality", "Lifetime guarantee", "Beautiful minimalist aesthetic"],
    cons: ["$170 vs Lodge's $30 — significant price premium", "Slower heat distribution than lighter carbon steel", "Not available at major retailers — direct order or Amazon only"],
    safetyProfile: "100% safe. Identical to Lodge — pure cast iron with no coatings. The smooth machining is cosmetic/functional, not a coating.",
    compatibility: ["Gas", "Electric", "Induction", "Oven", "Campfire", "Broiler"],
    howToUse: "Same care as Lodge cast iron: preheat over medium-low, use oil, dry thoroughly after washing, apply thin oil coat. The smooth surface will develop non-stick properties noticeably faster than Lodge's pebbly surface.",
    whoItsFor: "Cast iron enthusiasts who want premium American craftsmanship, lighter weight, and faster seasoning development. Those who have tried and loved Lodge but want an upgrade.",
    notFor: "Budget-conscious buyers (Lodge delivers 90% of the performance for 18% of the price). Complete beginners.",
    faq: [
      { question: "Is Field Company worth 5× the price of Lodge?", answer: "It depends on your priorities. If you cook with cast iron daily and care about weight and fast non-stick development, yes — the ergonomic improvement from 35% less weight is meaningful for daily use. If you just want a non-toxic pan that works perfectly, Lodge is one of the best values in all of cookware." },
    ],
    featured: true, rank: 6, imageUrl: "/images/field-company-cast-iron.jpg",
    category: ["cast-iron", "non-toxic", "premium", "made-in-usa"],
  },
  {
    id: 7, slug: "zwilling-madura-plus-ceramic",
    name: "Madura Plus 11-Inch Ceramic Non-Stick Fry Pan", brand: "Zwilling", panType: "Ceramic Non-Stick",
    material: "Aluminum + Reinforced Ceramic Coating", asin: "B0855KWDKQ",
    price: "$80", priceRange: "$50–$100", rating: 4.6, reviewCount: 3400,
    shortDescription: "Professional German engineering meets non-toxic cookware. Zwilling's reinforced ceramic coating is PTFE and PFAS-free and scratch-resistant enough for occasional metal utensils — a significant advantage over competitors.",
    keyFeatures: ["PTFE/PFAS-free ceramic coating reinforced with granite particles", "Scratch-resistant — more durable than standard ceramic", "Even heat distribution with thick aluminum base", "Induction compatible", "Oven safe to 500°F"],
    bestFor: "Everyday non-stick use, those who occasionally use metal utensils, induction cooktops",
    pros: ["Granite-reinforced ceramic lasts longer than standard ceramic", "One of the few ceramic non-sticks that's induction compatible", "German quality construction", "Mid-range price (~$80) for premium build", "Suitable for occasional metal spatula use"],
    cons: ["Still not as durable as cast iron or stainless", "Slightly heavier than comparable GreenPan models", "Not as widely available in stores as other brands"],
    safetyProfile: "PFAS-free, PTFE-free, PFOA-free, lead and cadmium-free. Zwilling's reinforced ceramic coating uses granite particles in the ceramic matrix — no fluoropolymers of any kind.",
    compatibility: ["Gas", "Electric", "Induction", "Oven (to 500°F)"],
    howToUse: "Low to medium heat. Despite the reinforced coating, avoid high heat which shortens any ceramic's life. The granite reinforcement means you can occasionally use a metal spatula (unlike standard ceramic), but silicone/wood is still preferred for maximum longevity.",
    whoItsFor: "Those who want PFAS-free non-stick and need induction compatibility. Home cooks who want extra durability and don't always remember to use wooden utensils.",
    notFor: "Those who cook at high heat (high heat degrades all ceramic). Those who want lifetime pans.",
    faq: [
      { question: "What makes Zwilling's coating more scratch-resistant?", answer: "Traditional ceramic coatings are relatively soft. Zwilling reinforces theirs with granite-derived mineral particles dispersed throughout the ceramic matrix, making the surface measurably harder. Independent scratch testing shows it withstands significantly more utensil contact before degrading than standard ceramics." },
    ],
    featured: true, rank: 7, imageUrl: "/images/zwilling-madura.jpg",
    category: ["ceramic", "non-toxic", "induction", "german"],
  },
  {
    id: 8, slug: "lodge-carbon-steel-skillet",
    name: "10-Inch Seasoned Carbon Steel Skillet", brand: "Lodge", panType: "Carbon Steel Skillet",
    material: "Pre-Seasoned Carbon Steel", asin: "B0000CF5HK",
    price: "$42", priceRange: "Under $50", rating: 4.5, reviewCount: 7800,
    shortDescription: "Lodge's entry into carbon steel delivers the same trusted non-toxic promise as their cast iron at a lower weight — a perfect starter carbon steel pan under $45.",
    keyFeatures: ["100% natural carbon steel — no PFAS coatings", "Pre-seasoned with 100% vegetable oil", "Significantly lighter than cast iron", "Dual pour spouts for easy draining", "Made in the USA"],
    bestFor: "Stovetop to oven cooking, those transitioning from cast iron, budget carbon steel entry",
    pros: ["Lodge's trusted non-toxic quality at $42 — exceptional value", "Pre-seasoned and ready to use out of the box", "Lighter than Lodge cast iron for easier handling", "Dual pour spouts — a practical detail most carbon steel lacks", "Made in USA"],
    cons: ["Slightly rougher surface texture than premium carbon steel brands", "Seasoning takes time to fully develop", "Handle gets hot — use an oven mitt"],
    safetyProfile: "100% safe. Carbon steel is iron and carbon — zero coatings, zero PFAS, zero chemicals. Same safety profile as cast iron.",
    compatibility: ["Gas", "Electric", "Induction", "Oven", "Campfire"],
    howToUse: "Same protocol as cast iron: preheat properly, use oil, dry immediately after washing, apply thin oil coat. Season 2–3 times in the oven before first use if you want to accelerate the non-stick development.",
    whoItsFor: "Budget-conscious cooks who want a genuine non-toxic pan lighter than cast iron. Lodge fans who want to try carbon steel without committing to a premium price.",
    notFor: "Those expecting instant non-stick — carbon steel takes 20–30 uses to develop proper seasoning.",
    faq: [
      { question: "How is this different from Lodge cast iron?", answer: "Both are Lodge, both are non-toxic, both are made in USA. Carbon steel is thinner (lighter, faster to heat), harder (develops a smoother seasoning surface over time), and works better for quick stovetop cooking. Cast iron is heavier, holds heat longer, and is better for oven baking and slow cooking." },
    ],
    featured: true, rank: 8, imageUrl: "/images/lodge-carbon-steel.jpg",
    category: ["carbon-steel", "non-toxic", "budget", "made-in-usa"],
  },
];

export function getProductBySlug(slug: string) { return products.find(p => p.slug === slug); }
export function getFeaturedProducts() { return products.filter(p => p.featured).sort((a, b) => a.rank - b.rank); }
export function getAllProducts() { return [...products].sort((a, b) => a.rank - b.rank); }
