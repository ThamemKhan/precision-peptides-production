import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, Beaker, CircleHelp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  ["What does HPLC stand for?", "HPLC stands for High Performance Liquid Chromatography."],
  ["What is HPLC used for in peptide research?", "It is commonly used to separate components in peptide samples and evaluate chromatographic purity."],
  ["What is an HPLC chromatogram?", "It is a graph produced by the chromatographic system showing detector response over time."],
  ["Does HPLC prove peptide identity?", "HPLC can provide useful information for characterization, but identity is generally evaluated using appropriate analytical evidence rather than relying on retention time alone."],
  ["What is the difference between HPLC and mass spectrometry?", "HPLC separates components, while mass spectrometry provides information related to molecular mass and can support molecular characterization."],
  ["Is higher HPLC purity always better?", "A higher reported chromatographic purity can be useful, but the number needs to be interpreted in the context of the analytical method and other characterization data."],
];

const HplcForPeptides = () => {
  useEffect(() => {
    document.title = "HPLC for Peptides: How Purity Is Tested | Precision Peptides";
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", "Learn how HPLC is used to measure peptide purity, interpret chromatograms and understand what HPLC results can and cannot tell you.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="border-b border-primary/10 bg-gradient-to-b from-primary/10 via-background to-background py-14 sm:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <Link to="/research-library" className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"><ArrowLeft className="h-4 w-4" /> Back to Research Library</Link>
            <div className="mt-8 flex items-center gap-3 text-primary"><BarChart3 className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-[0.16em]">Analytical techniques</span></div>
            <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">HPLC for Peptides: <span className="gradient-text">How Purity Is Tested</span></h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Learn how HPLC separates peptide components, how to read a chromatogram, and why the method matters as much as the reported percentage.</p>
          </div>
        </section>

        <article className="container mx-auto max-w-3xl px-4 py-14 sm:py-20">
          <div className="space-y-8 text-[16px] leading-8 text-muted-foreground">
            <p className="text-lg">HPLC is one of the most commonly discussed analytical techniques in peptide research. Short for High Performance Liquid Chromatography, it separates components within a sample and can provide useful information about the composition and purity of a peptide preparation.</p>
            <section><h2 className="font-display text-2xl font-bold text-foreground">What is HPLC?</h2><p className="mt-3">HPLC is an analytical separation technique. A sample is carried through a chromatographic system, where compounds interact differently with the stationary phase inside a column and move at different rates. The resulting separation is detected and displayed as a chromatogram.</p></section>
            <section><h2 className="font-display text-2xl font-bold text-foreground">What does an HPLC chromatogram show?</h2><p className="mt-3">A chromatogram is a graph of detector response over time. Its horizontal axis commonly represents retention time, while the vertical axis represents detector response. Different components may appear as different peaks; their location and shape help analysts evaluate a sample.</p></section>
            <section><h2 className="font-display text-2xl font-bold text-foreground">Retention time and purity</h2><p className="mt-3">Retention time is the time a detected component takes to reach the detector. It can contribute to characterization under the same analytical conditions, but it is not absolute proof of identity on its own. A sample may contain target peptide alongside related components or impurities; HPLC can separate some of them, allowing an estimate of chromatographic purity.</p></section>
            <aside className="rounded-xl border border-primary/20 bg-primary/5 p-6"><h3 className="font-display flex items-center gap-2 text-xl font-semibold text-foreground"><Beaker className="h-5 w-5 text-primary" /> A large peak is not the whole story</h3><p className="mt-3">A reported purity percentage should be considered with the method, detection conditions, calculation method, and other characterization data. A single chromatogram cannot answer every question about a peptide.</p></aside>
            <section><h2 className="font-display text-2xl font-bold text-foreground">HPLC and mass spectrometry</h2><p className="mt-3">These techniques have different roles. HPLC is primarily a separation technique. Mass spectrometry provides molecular-mass information and can support molecular characterization. Used together, analytical techniques can present a more informative picture than a single measurement.</p></section>
            <section><h2 className="font-display text-2xl font-bold text-foreground">What can affect an HPLC result?</h2><p className="mt-3">Results can be influenced by column selection, mobile phase, gradient conditions, flow rate, temperature, detection method, sample preparation, and the peptide itself. Different methods can therefore produce different chromatographic results.</p></section>
            <section><h2 className="font-display text-2xl font-bold text-foreground">How to review an HPLC result</h2><p className="mt-3">Look beyond the percentage. Consider the analytical method, chromatogram, retention time, additional peaks, calculation method, and other available characterization data. This creates a more complete interpretation of chromatographic purity.</p></section>
          </div>
          <section className="mt-14 border-t border-border pt-10"><div className="flex items-center gap-3 text-primary"><CircleHelp className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-[0.16em]">Frequently asked questions</span></div><h2 className="font-display mt-3 text-3xl font-bold text-foreground">HPLC questions, answered</h2><Accordion type="single" collapsible className="mt-5">{faqs.map(([question, answer], index) => <AccordionItem value={`faq-${index}`} key={question}><AccordionTrigger className="gap-4 text-left text-foreground hover:no-underline">{question}</AccordionTrigger><AccordionContent className="leading-6 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></section>
          <p className="mt-14 text-center text-xs text-muted-foreground">Research and educational content only. Not for human consumption.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default HplcForPeptides;
