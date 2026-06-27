const MARENZO_PRODUCTS = [
  {
    id: "midnight-oversized",
    name: "Midnight Oversized Tee",
    category: "Oversized T-Shirts",
    price: "₹799",
    rating: "4.8",
    image: "assets/images/midnight-oversized.svg",
    videoPoster: "assets/images/poster-2.svg",
    fabric: "240 GSM premium cotton blend",
    fit: "Relaxed oversized fit",
    colors: ["Matte Black", "Ash Grey", "Deep Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "A bold everyday oversized tee made for streetwear styling, soft comfort, and clean premium presence.",
    care: "Machine wash cold, dry inside-out, do not bleach.",
    links: {
      amazon: "https://www.amazon.in/s?k=marenzo+oversized+tshirt",
      meesho: "https://www.meesho.com/search?q=marenzo%20oversized%20tshirt",
      flipkart: "https://www.flipkart.com/search?q=marenzo+oversized+tshirt",
      shopsy: "https://www.shopsy.in/search?q=marenzo+oversized+tshirt",
      store: "#"
    }
  },
  {
    id: "legend-cream-tee",
    name: "Legend Cream Signature Tee",
    category: "Streetwear T-Shirts",
    price: "₹699",
    rating: "4.7",
    image: "assets/images/legend-cream-tee.svg",
    videoPoster: "assets/images/poster-3.svg",
    fabric: "Bio-washed cotton",
    fit: "Regular comfort fit",
    colors: ["Cream", "Black", "Sand"],
    sizes: ["S", "M", "L", "XL"],
    description: "A clean signature T-shirt with a premium soft hand-feel and versatile style for daily wear.",
    care: "Gentle wash, iron inside-out, avoid direct high heat.",
    links: {
      amazon: "https://www.amazon.in/s?k=marenzo+cream+tshirt",
      meesho: "https://www.meesho.com/search?q=marenzo%20cream%20tshirt",
      flipkart: "https://www.flipkart.com/search?q=marenzo+cream+tshirt",
      shopsy: "https://www.shopsy.in/search?q=marenzo+cream+tshirt",
      store: "#"
    }
  },
  {
    id: "charcoal-street",
    name: "Charcoal Street Tee",
    category: "Best Sellers",
    price: "₹749",
    rating: "4.9",
    image: "assets/images/charcoal-street-tee.svg",
    videoPoster: "assets/images/poster-4.svg",
    fabric: "Soft-touch cotton jersey",
    fit: "Street regular fit",
    colors: ["Charcoal", "Black", "Olive"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "A premium charcoal tee designed for confidence, sharp styling, and everyday durability.",
    care: "Wash with similar colors, dry in shade.",
    links: {
      amazon: "https://www.amazon.in/s?k=marenzo+charcoal+tshirt",
      meesho: "https://www.meesho.com/search?q=marenzo%20charcoal%20tshirt",
      flipkart: "https://www.flipkart.com/search?q=marenzo+charcoal+tshirt",
      shopsy: "https://www.shopsy.in/search?q=marenzo+charcoal+tshirt",
      store: "#"
    }
  },
  {
    id: "ivory-premium-shirt",
    name: "Ivory Premium Shirt",
    category: "Premium Shirts",
    price: "₹1,299",
    rating: "4.8",
    image: "assets/images/ivory-premium-shirt.svg",
    videoPoster: "assets/images/poster-5.svg",
    fabric: "Cotton-rich woven fabric",
    fit: "Modern slim comfort fit",
    colors: ["Ivory", "Black", "Beige"],
    sizes: ["S", "M", "L", "XL"],
    description: "A refined shirt for smart casual days, clean layering, and high-end everyday styling.",
    care: "Hand or gentle machine wash, low iron.",
    links: {
      amazon: "https://www.amazon.in/s?k=marenzo+premium+shirt",
      meesho: "https://www.meesho.com/search?q=marenzo%20premium%20shirt",
      flipkart: "https://www.flipkart.com/search?q=marenzo+premium+shirt",
      shopsy: "https://www.shopsy.in/search?q=marenzo+premium+shirt",
      store: "#"
    }
  },
  {
    id: "redline-graphic",
    name: "Redline Graphic Tee",
    category: "New Arrivals",
    price: "₹849",
    rating: "4.6",
    image: "assets/images/redline-graphic.svg",
    videoPoster: "assets/images/poster-1.svg",
    fabric: "Heavyweight cotton blend",
    fit: "Boxy street fit",
    colors: ["Black Red", "Washed Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "A statement tee with a strong red accent, built for bold styling and street presence.",
    care: "Wash inside-out, avoid print ironing.",
    links: {
      amazon: "https://www.amazon.in/s?k=marenzo+graphic+tshirt",
      meesho: "https://www.meesho.com/search?q=marenzo%20graphic%20tshirt",
      flipkart: "https://www.flipkart.com/search?q=marenzo+graphic+tshirt",
      shopsy: "https://www.shopsy.in/search?q=marenzo+graphic+tshirt",
      store: "#"
    }
  },
  {
    id: "sand-casual-shirt",
    name: "Sand Casual Shirt",
    category: "Casual Daily Wear",
    price: "₹1,099",
    rating: "4.7",
    image: "assets/images/sand-casual-shirt.svg",
    videoPoster: "assets/images/poster-6.svg",
    fabric: "Breathable cotton linen blend",
    fit: "Relaxed resort fit",
    colors: ["Sand", "Cream", "Olive"],
    sizes: ["S", "M", "L", "XL"],
    description: "A relaxed premium shirt made for clean casual looks, breathable comfort, and soft luxury styling.",
    care: "Cold wash, hang dry, steam iron recommended.",
    links: {
      amazon: "https://www.amazon.in/s?k=marenzo+casual+shirt",
      meesho: "https://www.meesho.com/search?q=marenzo%20casual%20shirt",
      flipkart: "https://www.flipkart.com/search?q=marenzo+casual+shirt",
      shopsy: "https://www.shopsy.in/search?q=marenzo+casual+shirt",
      store: "#"
    }
  },
  {
    id: "black-resort-shirt",
    name: "Black Resort Shirt",
    category: "Premium Shirts",
    price: "₹1,199",
    rating: "4.7",
    image: "assets/images/black-resort-shirt.svg",
    videoPoster: "assets/images/poster-7.svg",
    fabric: "Fluid cotton-viscose blend",
    fit: "Relaxed premium fit",
    colors: ["Black", "Wine", "Stone"],
    sizes: ["S", "M", "L", "XL"],
    description: "A soft black shirt for evening styling, resort looks, and confident premium wear.",
    care: "Gentle wash only, low heat iron.",
    links: {
      amazon: "https://www.amazon.in/s?k=marenzo+black+shirt",
      meesho: "https://www.meesho.com/search?q=marenzo%20black%20shirt",
      flipkart: "https://www.flipkart.com/search?q=marenzo+black+shirt",
      shopsy: "https://www.shopsy.in/search?q=marenzo+black+shirt",
      store: "#"
    }
  },
  {
    id: "olive-heavy-tee",
    name: "Olive Heavy Tee",
    category: "Casual Daily Wear",
    price: "₹899",
    rating: "4.8",
    image: "assets/images/olive-heavy-tee.svg",
    videoPoster: "assets/images/poster-8.svg",
    fabric: "Heavy cotton jersey",
    fit: "Premium relaxed fit",
    colors: ["Olive", "Black", "Cream"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "A thick, structured tee that holds shape and gives a high-end streetwear silhouette.",
    care: "Cold wash inside-out, dry flat for best shape.",
    links: {
      amazon: "https://www.amazon.in/s?k=marenzo+olive+tshirt",
      meesho: "https://www.meesho.com/search?q=marenzo%20olive%20tshirt",
      flipkart: "https://www.flipkart.com/search?q=marenzo+olive+tshirt",
      shopsy: "https://www.shopsy.in/search?q=marenzo+olive+tshirt",
      store: "#"
    }
  }
];

const MARENZO_COLLECTIONS = [
  { title: "Oversized T-Shirts", note: "Relaxed street silhouettes", image: "assets/images/midnight-oversized.svg" },
  { title: "Premium Shirts", note: "Sharp everyday elegance", image: "assets/images/ivory-premium-shirt.svg" },
  { title: "Streetwear T-Shirts", note: "Graphic energy, clean fit", image: "assets/images/redline-graphic.svg" },
  { title: "Casual Daily Wear", note: "Soft comfort, strong presence", image: "assets/images/sand-casual-shirt.svg" },
  { title: "New Arrivals", note: "Fresh drops for this week", image: "assets/images/olive-heavy-tee.svg" },
  { title: "Best Sellers", note: "Customer-loved fits", image: "assets/images/charcoal-street-tee.svg" }
];
