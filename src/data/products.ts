import hero1 from "@/assets/hero-1.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import p5 from "@/assets/product-5.jpg";
import p6 from "@/assets/product-6.jpg";

export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  images?: string[];
  category: "Men" | "Women" | "Kids";
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  onSale?: boolean;
  description?: string;
};

export const products: Product[] = [
  {
    id: "tee-emerald",
    title: "Essential Tee — Emerald",
    price: 29,
    image: p1,
    category: "Men",
    colors: ["Emerald", "Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    description:
      "Breathable cotton tee with a soft hand-feel and a modern, slightly boxy fit.",
  },
  {
    id: "blazer-charcoal",
    title: "Structured Blazer — Charcoal",
    price: 119,
    image: p2,
    category: "Women",
    colors: ["Charcoal", "Black"],
    sizes: ["XS", "S", "M", "L"],
    onSale: true,
    description:
      "Tailored blazer with sharp lapels and subtle stretch for all-day comfort.",
  },
  {
    id: "jogger-black",
    title: "Everyday Jogger — Black",
    price: 49,
    image: p3,
    category: "Men",
    colors: ["Black", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Tapered joggers with cuffed hems and secure pockets, ideal for travel or lounge.",
  },
  {
    id: "knit-offwhite",
    title: "Ribbed Knit Top — Off‑White",
    price: 39,
    image: p4,
    category: "Women",
    colors: ["Off‑White", "Black"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
    description: "Stretch rib knit with a flattering neckline and clean finish.",
  },
  {
    id: "overshirt-olive",
    title: "Lightweight Overshirt — Olive",
    price: 79,
    image: p5,
    category: "Men",
    colors: ["Olive", "Black"],
    sizes: ["S", "M", "L", "XL"],
    description: "Versatile overshirt layer with utility pockets and matte buttons.",
  },
  {
    id: "trouser-beige",
    title: "Wide‑Leg Trouser — Beige",
    price: 69,
    image: p6,
    category: "Women",
    colors: ["Beige", "Black"],
    sizes: ["XS", "S", "M", "L"],
    onSale: true,
    description: "Flowy drape, high waist, and a clean front for effortless polish.",
  },
];

export const heroImage = hero1;
