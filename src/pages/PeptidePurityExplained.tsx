import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BadgePercent, CircleHelp, ListChecks } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  ["What is peptide purity?", "Peptide purity is an analytical measurement describing the amount of target peptide detected relative to other detected components under a specified testing method."],
  ["What does 99 percent peptide purity mean?", "It generally indicates a high level of chromatographic or otherwise measured purity under the stated analytical method. The exact interpretation depends on the method."],
  ["Is 98 percent peptide purity good?", "A 98 percent result may represent high chromatographic purity, but researchers should consider the analytical method and other characterization information before drawing conclusions."],
  ["How is peptide purity tested?", "HPLC is commonly used to evaluate chromatographic purity. Other analytical methods can be used to characterize molecular identity and other properties."],
  ["Is peptide purity the same as peptide identity?", "No. Purity and identity are different analytical questions."],
  ["Why does peptide purity matter?", "Unexpected impurities can complicate research results and affect downstream applications, making analytical characterization important for reproducible research."],
];

const PeptidePurityExplained = () => {
  useEffect(() => {
    document.title = "Peptide Purity Explained: What Does 98% or 99% Mean? | Precision Peptides";
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement("meta"); description.setAttribute("name", "description"); document.head.appendChild(description); }
    description.setAttribute("content", "What does 98% or 99% peptide purity mean? Learn how HPLC purity is calculated and why purity alone does not confirm peptide identity.");
  }, []);

  return <div className="min-h-screen bg-background"><Header /><main className="pt-16 md:pt-20">
    <section className="border-b border-primary/10 bg-gradient-to-b from-primary/10 via-background to-background py-14 sm:py-20"><div className="container mx-auto max-w-4xl px-4">
      <Link to="/research-library" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"><ArrowLeft className="h-4 w-4" /> Back to Research Library</Link>
      <div className="mt-8 flex items-center gap-3 text-primary"><BadgePercent className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-[0.16em]">Peptide analysis</span></div>
      <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">Peptide Purity Explained: <span className="gradient-text">What Does 98% or 99% Mean?</span></h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Understand how peptide purity is measured, why analytical context matters, and why purity alone does not confirm identity.</p>
    </div></section>
    <article className="container mx-auto max-w-3xl px-4 py-14 sm:py-20"><div className="space-y-8 text-[16px] leading-8 text-muted-foreground">
      <p className="text-lg">Peptide purity is one of the first numbers researchers look for when evaluating a research peptide. You may see 95%, 98%, or 99% purity. While a higher number can be useful, peptide purity is more complicated than a single percentage suggests.</p>
      <section><h2 className="font-display text-2xl font-bold text-foreground">What does peptide purity mean?</h2><p className="mt-3">Peptide purity generally describes the proportion of target peptide detected relative to other detected components under a particular analytical method. For example, HPLC purity is based on signals detected in that specific chromatographic analysis. Always read the percentage with the method used to produce it.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">Why is peptide purity important?</h2><p className="mt-3">Synthetic peptide production can result in related substances and other impurities during synthesis, purification, handling, or storage. Unexpected components can complicate experimental interpretation, making analytical purity control an important part of peptide research.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">What does 98% or 99% purity mean?</h2><p className="mt-3">These figures generally refer to a specific analytical measurement—not independent verification that every molecule has been characterized in every possible sense. The test method, detection system, and calculation all matter. Comparing percentages without their analytical methods can be misleading.</p></section>
      <aside className="rounded-xl border border-primary/20 bg-primary/5 p-6"><h3 className="font-display flex items-center gap-2 text-xl font-semibold text-foreground"><ListChecks className="h-5 w-5 text-primary" /> Purity and identity are not the same</h3><p className="mt-3">Purity asks about the composition detected by a specific method. Identity asks whether the material is the expected molecular entity. More than one analytical measurement may be needed to build confidence in characterization.</p></aside>
      <section><h2 className="font-display text-2xl font-bold text-foreground">Why the analytical method matters</h2><p className="mt-3">A 99% result using one HPLC method is not automatically directly equivalent to a 98% result using another. Columns, mobile phases, gradients, detection methods, and calculation procedures can all influence results. Analytical chemistry is about understanding the measurement, not only reading the number.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">What to look for</h2><p className="mt-3">Review the reported purity percentage, analytical method, chromatogram where available, batch information, identity and molecular-weight information, and additional characterization data. Together, these provide a more complete picture.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">Final thoughts</h2><p className="mt-3">Peptide purity is useful information, but it is not the entire story. When you see 98% or 99% on a COA, ask how it was measured and review the other available analytical information.</p></section>
    </div>
    <section className="mt-14 border-t border-border pt-10"><div className="flex items-center gap-3 text-primary"><CircleHelp className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-[0.16em]">Frequently asked questions</span></div><h2 className="font-display mt-3 text-3xl font-bold text-foreground">Purity questions, answered</h2><Accordion type="single" collapsible className="mt-5">{faqs.map(([question, answer], index) => <AccordionItem value={`faq-${index}`} key={question}><AccordionTrigger className="gap-4 text-left text-foreground hover:no-underline">{question}</AccordionTrigger><AccordionContent className="leading-6 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></section><p className="mt-14 text-center text-xs text-muted-foreground">Research and educational content only. Not for human consumption.</p>
    </article></main><Footer /></div>;
};

export default PeptidePurityExplained;
