import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Atom, CircleHelp, Microscope } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  ["What does GHK-Cu stand for?", "GHK-Cu refers to glycyl-L-histidyl-L-lysine associated with copper."],
  ["Is GHK-Cu a peptide?", "Yes. GHK is a tripeptide, and GHK-Cu refers to the copper-binding complex."],
  ["Why is GHK-Cu called a copper peptide?", "GHK can bind copper, which is why GHK-Cu is commonly described as a copper peptide."],
  ["What are researchers studying about GHK-Cu?", "Research has examined GHK-Cu in areas including cell signalling, extracellular matrix biology, and oxidative stress."],
  ["Is GHK-Cu clinically proven for specific uses?", "Current reviews describe interesting preclinical findings but also note limited standardized clinical evidence."],
  ["Is GHK-Cu the same as every copper peptide?", "No. Copper peptide is a broader description, while GHK-Cu refers specifically to the GHK-copper complex."],
];

const WhatIsGhKCu = () => {
  useEffect(() => {
    document.title = "What Is GHK-Cu? A Guide to the Copper Peptide | Precision Peptides";
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement("meta"); description.setAttribute("name", "description"); document.head.appendChild(description); }
    description.setAttribute("content", "What is GHK-Cu? Explore the structure, copper-binding chemistry, research background and analytical characterization of this copper-binding peptide.");
  }, []);

  return <div className="min-h-screen bg-background"><Header /><main className="pt-16 md:pt-20">
    <section className="border-b border-primary/10 bg-gradient-to-b from-primary/10 via-background to-background py-14 sm:py-20"><div className="container mx-auto max-w-4xl px-4">
      <Link to="/research-library" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"><ArrowLeft className="h-4 w-4" /> Back to Research Library</Link>
      <div className="mt-8 flex items-center gap-3 text-primary"><Atom className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-[0.16em]">Peptide chemistry</span></div>
      <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">What Is GHK-Cu? <span className="gradient-text">A Guide to the Copper Peptide</span></h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Explore the structure, copper-binding chemistry, research background, and analytical characterization of this copper-binding peptide.</p>
    </div></section>
    <article className="container mx-auto max-w-3xl px-4 py-14 sm:py-20"><div className="space-y-8 text-[16px] leading-8 text-muted-foreground">
      <p className="text-lg">GHK-Cu is a copper-binding peptide that has attracted interest in biochemical and biomedical research. GHK refers to the tripeptide glycyl-L-histidyl-L-lysine. When GHK forms a complex with copper, the resulting compound is commonly referred to as GHK-Cu.</p>
      <section><h2 className="font-display text-2xl font-bold text-foreground">What is GHK?</h2><p className="mt-3">GHK is a tripeptide made from three amino acids: glycine, histidine, and lysine. Its abbreviation comes from the first letters of those amino acids. As a small peptide, it offers a useful example of how short amino-acid sequences can have specific chemical properties.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">What does the Cu mean in GHK-Cu?</h2><p className="mt-3">Cu refers to copper. GHK can bind copper, forming a copper-peptide complex. This interaction is a defining feature of GHK-Cu and an important reason for scientific interest in the compound.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">Why are researchers interested in GHK-Cu?</h2><p className="mt-3">Research has investigated GHK-Cu across molecular and cellular biology, including extracellular matrix biology, cell signalling, oxidative stress, and tissue-related processes. Reviews describe promising preclinical findings, while also noting that standardized clinical evidence remains limited.</p></section>
      <aside className="rounded-xl border border-primary/20 bg-primary/5 p-6"><h3 className="font-display flex items-center gap-2 text-xl font-semibold text-foreground"><Microscope className="h-5 w-5 text-primary" /> Research context matters</h3><p className="mt-3">Laboratory and preclinical studies can help researchers understand possible mechanisms and generate hypotheses. Results from cell studies or animal models should not automatically be interpreted as evidence of a proven human effect.</p></aside>
      <section><h2 className="font-display text-2xl font-bold text-foreground">Peptide chemistry and metal binding</h2><p className="mt-3">GHK-Cu sits at the intersection of peptide chemistry and metal-binding chemistry. The peptide provides a defined amino-acid structure, while copper introduces metal-binding properties. This makes the complex an interesting system for studying peptide and metal-ion interactions.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">Is GHK-Cu the same as a copper peptide?</h2><p className="mt-3">“Copper peptide” is broader than GHK-Cu: it can refer to peptides that interact with copper ions. GHK-Cu is one specific example, so the terms should not always be treated as perfect synonyms.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">How to evaluate GHK-Cu information</h2><p className="mt-3">Start with the molecule itself: the exact peptide sequence, molecular form, analytical characterization, purity data, experimental model, study design, and the actual evidence. This helps separate scientific information from simplified claims.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">Final thoughts</h2><p className="mt-3">GHK-Cu is a small copper-binding peptide complex with a broad research history. Its chemistry is relatively simple to describe, but the biological questions surrounding it are more complex. Understanding the molecule and its evidence base is the most useful place to start.</p></section>
    </div><section className="mt-14 border-t border-border pt-10"><div className="flex items-center gap-3 text-primary"><CircleHelp className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-[0.16em]">Frequently asked questions</span></div><h2 className="font-display mt-3 text-3xl font-bold text-foreground">GHK-Cu questions, answered</h2><Accordion type="single" collapsible className="mt-5">{faqs.map(([question, answer], index) => <AccordionItem value={`faq-${index}`} key={question}><AccordionTrigger className="gap-4 text-left text-foreground hover:no-underline">{question}</AccordionTrigger><AccordionContent className="leading-6 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></section><p className="mt-14 text-center text-xs text-muted-foreground">Research and educational content only. Not for human consumption.</p></article>
  </main><Footer /></div>;
};

export default WhatIsGhKCu;
