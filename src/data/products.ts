import bpc157Img from "@/assets/bpc-157.png";
import retatrutideImg from "@/assets/retatrutide.png";
import ghkCuImg from "@/assets/ghk-cu.png";

export interface Product {
  id: string;
  title: string;
  handle: string;
  description: string;
  image: string | null;
  inStock: boolean;
  comingsoon?:boolean
  variants: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  title: string;
  available: boolean;
}

/**
 * ─── EDIT PRODUCTS HERE ───
 * To change stock status, set `inStock` to true/false.
 * To change variant availability, set `available` on each variant.
 */
export const products: Product[] = [
  {
    id: "bpc-157",
    title: "BPC-157",
    handle: "bpc-157",
    description: "Body Protection Compound-157. A pentadecapeptide composed of 15 amino acids, widely studied for its regenerative and protective properties in research settings.",
    image: bpc157Img,
    inStock: true,
    comingsoon:false,
    variants: [
      // { id: "bpc-157-5mg", title: "5mg", available: true },
      { id: "bpc-157-10mg", title: "10mg", available: true },
    ],
  },
  {
    id: "retatrutide",
    title: "Retatrutide",
    handle: "retatrutide",
    description: "A triple-agonist peptide targeting GIP, GLP-1, and glucagon receptors. Actively researched for metabolic applications in clinical studies.",
    image: retatrutideImg,
    inStock: false,
    comingsoon:false,
    variants: [
      // { id: "retatrutide-5mg", title: "5mg", available: true },
      { id: "retatrutide-10mg", title: "10mg", available: true },
    ],
  },
  {
    id: "ghk-cu",
    title: "GHK-Cu",
    handle: "ghk-cu",
    description: "Copper peptide GHK-Cu, a naturally occurring tripeptide studied for its role in tissue remodeling, wound healing, and anti-inflammatory research.",
    image: ghkCuImg,
    inStock: false,
    comingsoon:false,
    variants: [
      // { id: "ghk-cu-50mg", title: "50mg", available: true },
      { id: "ghk-cu-10mg", title: "10mg", available: true },
    ],
  },
  {
    id: "mots-c",
    title: "MOTS-C",
    handle: "mots-c",
    description: "Mitochondrial-derived peptide MOTS-C, a 16-amino acid peptide studied for its role in metabolic homeostasis and exercise mimetics research.",
    image: null,
    inStock: false,
    comingsoon: true,
    variants: [
      { id: "mots-c-10mg", title: "10mg", available: true },
    ],
  },
  {
    id: "tb-500",
    title: "TB-500",
    handle: "tb-500",
    description: "Thymosin Beta-4 fragment, a 43-amino acid peptide researched for its potential in tissue repair, cell migration, and anti-inflammatory pathways.",
    image: null,
    inStock: false,
    comingsoon: true,
    variants: [
      // { id: "tb-500-2mg", title: "2mg", available: true },
      { id: "tb-500-10mg", title: "10mg", available: true },
    ],
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find(p => p.handle === handle);
}
