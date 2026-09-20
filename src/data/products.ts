import bpc157Img from "@/assets/bpc-157.png";
import retatrutideImg from "@/assets/retatrutide.png";
import ghkCuImg from "@/assets/GHKcu-100.png";
import motsc from "@/assets/motsc.png";
import tb500 from "@/assets/tb500.png";
import hgh from "@/assets/hghedited.png";
import semax from "@/assets/Semax10mg.png";
import selank from "@/assets/selank.png";
import pt141 from "@/assets/pt141.png";
import dsip from "@/assets/dsip.png";
import cjc_ipa from "@/assets/cjc_ipa.png";
import snap8 from "@/assets/snap8.png";
import kisspeptine from "@/assets/kisspeptine.png"
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

export const productSeo: Record<string, { title: string; description: string; keywords?: string; researchContent?: string }> = {
  "bpc-157": {
    title: "BPC-157 Peptide for Muscle & Workout Recovery Research",
    description: "Explore BPC-157 peptide research for muscle repair, workout recovery, sports recovery, and training recovery. Learn about current recovery research.",
    keywords: "BPC-157 peptide, BPC-157 research, peptide for muscle recovery, peptide for workout recovery, peptide for muscle repair, peptide for training recovery, peptide for faster recovery, peptide for injury recovery, peptide for sports recovery, peptide for athletes, best recovery peptide",
    researchContent: `BPC-157 Peptide

BPC-157 Research for Muscle & Workout Recovery

BPC-157 is a peptide that has attracted attention in scientific research involving tissue repair, recovery pathways, and musculoskeletal research. The BPC-157 peptide is studied primarily in preclinical settings, making it an area of continuing interest within peptide research.

Researchers exploring peptides for recovery may investigate different compounds and mechanisms related to tissue response, physical stress, and recovery processes.

Peptide for Muscle Recovery Research

Interest in a peptide for muscle recovery has grown alongside research into compounds that may influence biological pathways associated with tissue repair and recovery. BPC-157 research has examined these mechanisms primarily through laboratory and preclinical models.

Research topics may include: peptide for workout recovery; peptide for muscle repair; peptide for training recovery; peptide for faster recovery; peptide for injury recovery; and peptide for sports recovery.

The available evidence and research objectives should always be considered when evaluating experimental peptides.

BPC-157 for Recovery Research

BPC-157 has become one of the more widely discussed experimental peptides in recovery-related research. Scientists continue to investigate its biological activity and potential mechanisms in laboratory and preclinical models.

For researchers comparing the best recovery peptide, there is no universally established option. Different compounds are studied for different mechanisms, research models, and objectives.

Peptides for Athletes & Sports Recovery Research

Research involving a peptide for athletes or peptide for sports recovery often focuses on understanding biological processes associated with physical stress, tissue response, and recovery.

While BPC-157 is frequently discussed in these contexts, research findings should not be interpreted as proof of effectiveness for athletic performance, injury treatment, or personal recovery.

Research-Focused Peptide Information

Understanding experimental peptides requires looking at the available scientific evidence rather than relying on promotional claims. BPC-157 research continues to develop, with ongoing interest in its mechanisms and potential applications in laboratory research.

Research Use Only: BPC-157 and other peptides discussed on this website may be investigational. Information is provided for educational and laboratory research purposes only and is not medical advice, diagnosis, treatment guidance, or a recommendation for personal use.`,
  },
  retatrutide: {
    title: "Retatrutide | Research Purpose | Precision Peptides",
    description: "A triple-agonist peptide targeting GIP, GLP-1, and glucagon receptors. Actively researched for metabolic applications in clinical studies.",
  },
  "ghk-cu": {
    title: "GHK-Cu | Research Purpose | Precision Peptides",
    description: "Copper peptide GHK-Cu, a naturally occurring tripeptide studied for its role in tissue remodeling, wound healing, and anti-inflammatory research.",
  },
  "mots-c": {
    title: "MOTS-C | Research Purpose | Precision Peptides",
    description: "Mitochondrial-derived peptide MOTS-C, a 16-amino acid peptide studied for its role in metabolic homeostasis and exercise mimetics research.",
  },
  "tb-500": {
    title: "TB-500 | Research Purpose | Precision Peptides",
    description: "Thymosin Beta-4 fragment, a 43-amino acid peptide researched for its potential in tissue repair, cell migration, and anti-inflammatory pathways.",
  },
  "hgh-191aa": {
    title: "HGH-191AA | Research Purpose | Precision Peptides",
    description: "Human Growth Hormone fragment, a 191-amino acid peptide researched for its potential in muscle growth, fat loss, and anti-aging applications.",
  },
  semax: {
    title: "SEMAX | Research Purpose | Precision Peptides",
    description: "A synthetic heptapeptide (7 amino acids) derived from a fragment of the hormone ACTH, researched for its potential in cognitive enhancement, neuroprotection, and mood regulation.",
  },
  selank: {
    title: "SELANK | Research Purpose | Precision Peptides",
    description: "a synthetic peptide derived from the tuftsin sequence, studied for its potential in reducing anxiety, improving mood stability, and supporting cognitive function without sedative effects.",
  },
  pt141: {
    title: "PT141 | Research Purpose | Precision Peptides",
    description: "PT-141 (Bremelanotide) – a neuroactive peptide derived from melanocortins, known for enhancing libido in both men and women through central nervous system signaling.",
  },
  cjc_ipa: {
    title: "CJC + IPA | Research Purpose | Precision Peptides",
    description: "CJC + IPA (CJC-1295 + Ipamorelin) – a combination of two peptides researched for their potential in muscle growth, fat loss, and anti-aging applications.",
  },
  dsip: {
    title: "DSIP | Research Purpose | Precision Peptides",
    description: "DSIP (Drug-Sensitive Immunogenic Peptide) – a synthetic peptide researched for its potential in immune system modulation and anti-cancer applications.",
  },
  kisspeptine: {
    title: "Kisspeptin | Research Purpose | Precision Peptides",
    description: "Kisspeptin – a synthetic peptide researched for its potential in immune system modulation and anti-cancer applications.",
  },
  snap8: {
    title: "SNAP8 | Research Purpose | Precision Peptides",
    description: "SNAP8 (Synthetic Neuropeptide) – a synthetic peptide researched for its potential in immune system modulation and anti-cancer applications.",
  },
};

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
    comingsoon: false,
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
    inStock: true,
    comingsoon: false,
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
    inStock: true,
    comingsoon:false,
    variants: [
       { id: "ghk-cu-50mg", title: "50mg", available: true },
      { id: "ghk-cu-100mg", title: "100mg - Coming soon", available: true },
    ],
  },
  {
    id: "mots-c",
    title: "MOTS-C",
    handle: "mots-c",
    description: "Mitochondrial-derived peptide MOTS-C, a 16-amino acid peptide studied for its role in metabolic homeostasis and exercise mimetics research.",
    image: motsc,
    inStock: true,
    comingsoon: false,
    variants: [
      { id: "mots-c-10mg", title: "10mg", available: true },
    ],
  },
  {
    id: "tb-500",
    title: "TB-500",
    handle: "tb-500",
    description: "Thymosin Beta-4 fragment, a 43-amino acid peptide researched for its potential in tissue repair, cell migration, and anti-inflammatory pathways.",
    image: tb500,
    inStock: true,
    comingsoon: false,
    variants: [
      // { id: "tb-500-2mg", title: "2mg", available: true },
      { id: "tb-500-10mg", title: "10mg", available: true },
    ],
  },
  {
    id: "hgh-191aa",
    title: "HGH-191AA",
    handle: "hgh-191aa",
    description: "Human Growth Hormone fragment, a 191-amino acid peptide researched for its potential in muscle growth, fat loss, and anti-aging applications.",
    image: hgh,
    inStock: true,
    comingsoon: false,
    variants: [
     { id: "hgh-191aa-24iu", title: "24IU - Coming soon", available: false },
      { id: "hgh-191aa-10iu", title: "10IU", available: true },
    ],
  },
  {
    id: "semax",
    title: "SEMAX",
    handle: "semax",
    description: "A synthetic heptapeptide (7 amino acids) derived from a fragment of the hormone ACTH, researched for its potential in cognitive enhancement, neuroprotection, and mood regulation.",
    image: semax,
    inStock: true,
    comingsoon: false,
    variants: [
      { id: "semax-10mg", title: "10mg", available: true },
    ],
  },
  {
    id: "selank",
    title: "SELANK",
    handle: "selank",
    description: "a synthetic peptide derived from the tuftsin sequence, studied for its potential in reducing anxiety, improving mood stability, and supporting cognitive function without sedative effects.",
    image: selank,
    inStock: true,
    comingsoon: false,
    variants: [
      { id: "selank-10mg", title: "10mg", available: true },
    ],
  },
  {
    id: "pt141",
    title: "PT141",
    handle: "pt141",
    description: "PT-141 (Bremelanotide) – a neuroactive peptide derived from melanocortins, known for enhancing libido in both men and women through central nervous system signaling.",
    image: pt141,
    inStock: true,
    comingsoon: false,
    variants: [
      { id: "pt141-10mg", title: "10mg", available: true },
    ],
  },
  {
    id: "cjc_ipa",
    title: "CJC + IPA",
    handle: "cjc_ipa",
    description: "CJC + IPA (CJC-1295 + Ipamorelin) – a combination of two peptides researched for their potential in muscle growth, fat loss, and anti-aging applications.",
    image: cjc_ipa,
    inStock: true,
    comingsoon: false,
    variants: [
      { id: "cjc_ipa-5mg/5mg", title: "5mg", available: true },
    ],
  },
  {
    id: "dsip",
    title: "DSIP",
    handle: "dsip",
    description: "DSIP (Drug-Sensitive Immunogenic Peptide) – a synthetic peptide researched for its potential in immune system modulation and anti-cancer applications.",
    image: dsip,
    inStock: true,
    comingsoon: false,
    variants: [
      { id: "dsip-10mg", title: "10mg", available: true },
    ],
  },
  {
    id: "kisspeptine",
    title: "Kisspeptin",
    handle: "kisspeptine",
    description: "Kisspeptin – a synthetic peptide researched for its potential in immune system modulation and anti-cancer applications.",
    image: kisspeptine,
    inStock: true,
    comingsoon: false ,
    variants: [
      { id: "kisspeptine-10mg", title: "10mg", available: true },
    ],
  },
  {
    id: "snap8",
    title: "SNAP8",
    handle: "snap8",
    description: "SNAP8 (Synthetic Neuropeptide) – a synthetic peptide researched for its potential in immune system modulation and anti-cancer applications.",
    image: snap8,
    inStock: true,
    comingsoon: false,
    variants: [
      { id: "snap8-10mg", title: "10mg", available: true },
    ],
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find(p => p.handle === handle);
}
