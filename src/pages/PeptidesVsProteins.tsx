import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CircleHelp, Dna, GitCompareArrows } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  ["What is the main difference between a peptide and a protein?", "Peptides are generally shorter amino-acid chains, while proteins are generally larger and often fold into complex three-dimensional structures."],
  ["How many amino acids make a peptide?", "A common rough guideline describes peptides as chains of fewer than about 50 amino acids, but there is no universal cutoff that applies to every case."],
  ["Are proteins made from peptides?", "Proteins are made from amino acids connected by peptide bonds. A peptide chain can therefore be considered part of the same basic molecular framework."],
  ["Are peptides smaller than proteins?", "Generally yes."],
  ["Are peptides and proteins made from amino acids?", "Yes. Both are built from amino acids."],
  ["Are all peptides biologically active?", "No. Biological activity depends on the particular sequence, structure, and molecular context."],
];

const PeptidesVsProteins = () => {
  useEffect(() => {
    document.title = "Peptides vs Proteins: What's the Difference? | Precision Peptides";
    let description = document.querySelector('meta[name="description"]');
    if (!description) { description = document.createElement("meta"); description.setAttribute("name", "description"); document.head.appendChild(description); }
    description.setAttribute("content", "Peptides and proteins are made from amino acids, but they differ in length, structure and classification. Learn the key differences in this guide.");
  }, []);

  return <div className="min-h-screen bg-background"><Header /><main className="pt-16 md:pt-20">
    <section className="border-b border-primary/10 bg-gradient-to-b from-primary/10 via-background to-background py-14 sm:py-20"><div className="container mx-auto max-w-4xl px-4">
      <Link to="/research-library" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"><ArrowLeft className="h-4 w-4" /> Back to Research Library</Link>
      <div className="mt-8 flex items-center gap-3 text-primary"><GitCompareArrows className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-[0.16em]">Peptide basics</span></div>
      <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">Peptides vs Proteins: <span className="gradient-text">What's the Difference?</span></h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Learn how peptides and proteins differ in length, structure, classification, and the way researchers study them.</p>
    </div></section>
    <article className="container mx-auto max-w-3xl px-4 py-14 sm:py-20"><div className="space-y-8 text-[16px] leading-8 text-muted-foreground">
      <p className="text-lg">Peptides and proteins are closely related. Both are built from amino acids, contain peptide bonds, and are important in biology. The simplest distinction is size and structure, although there is not one universal cutoff.</p>
      <section><h2 className="font-display text-2xl font-bold text-foreground">What is a peptide?</h2><p className="mt-3">A peptide is a chain of amino acids connected by peptide bonds. Short chains are generally described as peptides. They are typically shorter and less structurally complex than proteins, though no single boundary is perfect.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">What is a protein?</h2><p className="mt-3">Proteins are larger biological molecules made from amino-acid chains. They can fold into complex three-dimensional structures and perform a wide range of biological functions. Their size varies considerably, but proteins can contain hundreds or thousands of amino acids.</p></section>
      <aside className="rounded-xl border border-primary/20 bg-primary/5 p-6"><h3 className="font-display flex items-center gap-2 text-xl font-semibold text-foreground"><Dna className="h-5 w-5 text-primary" /> The shared molecular framework</h3><p className="mt-3">Amino acids are the building blocks. Connected through peptide bonds, they form chains. Shorter chains are generally called peptides; longer chains that fold into complex structures are generally called proteins.</p></aside>
      <section><h2 className="font-display text-2xl font-bold text-foreground">Is there an exact amino-acid cutoff?</h2><p className="mt-3">Not really. You may see a rough distinction at around 50 amino acids, but biology does not always fit a fixed number and sources use different thresholds. Size, structure, and biological organization all matter.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">The main differences</h2><p className="mt-3"><strong className="text-foreground">Size:</strong> peptides are generally shorter; proteins are generally larger. <strong className="text-foreground">Structure:</strong> many proteins form extensive three-dimensional structures, while peptides can have defined but often less extensive organization. <strong className="text-foreground">Biological roles:</strong> both can participate in signalling and other processes, while proteins serve broad structural, enzymatic, transport, and regulatory roles.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">Why does the distinction matter?</h2><p className="mt-3">Size and structure can affect how researchers study a molecule. Synthetic methods, analytical techniques, stability, folding, and characterization generally become more complex as molecular size increases. Peptide chemistry occupies an interesting space between small molecules and larger proteins.</p></section>
      <section><h2 className="font-display text-2xl font-bold text-foreground">Final thoughts</h2><p className="mt-3">Peptides and proteins exist along a molecular continuum. Both are built from amino acids, but differences in chain length, structure, and biological organization help scientists distinguish between them.</p></section>
    </div><section className="mt-14 border-t border-border pt-10"><div className="flex items-center gap-3 text-primary"><CircleHelp className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-[0.16em]">Frequently asked questions</span></div><h2 className="font-display mt-3 text-3xl font-bold text-foreground">Peptide and protein questions, answered</h2><Accordion type="single" collapsible className="mt-5">{faqs.map(([question, answer], index) => <AccordionItem value={`faq-${index}`} key={question}><AccordionTrigger className="gap-4 text-left text-foreground hover:no-underline">{question}</AccordionTrigger><AccordionContent className="leading-6 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></section><p className="mt-14 text-center text-xs text-muted-foreground">Research and educational content only. Not for human consumption.</p></article>
  </main><Footer /></div>;
};

export default PeptidesVsProteins;
