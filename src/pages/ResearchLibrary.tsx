import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BookOpen, FileSearch, Search, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const questions = [
  {
    question: "What does COA stand for?",
    answer: "COA stands for Certificate of Analysis. It records analytical information and test results associated with a particular material or batch.",
  },
  {
    question: "What does peptide purity mean?",
    answer: "Peptide purity is a reported analytical measurement showing the proportion of target material relative to other detected components under the stated testing method.",
  },
  {
    question: "Does a higher purity percentage always mean a better material?",
    answer: "No. Interpret purity alongside the analytical method, sample preparation, specification, and other available characterization data. A single percentage is not a complete description of a material.",
  },
  {
    question: "What is HPLC used for on a COA?",
    answer: "HPLC can separate components in a sample and assess chromatographic purity and related components. The method used is as important as the result reported.",
  },
  {
    question: "Why is the batch number important?",
    answer: "A batch number identifies a particular production batch and connects its analytical documentation to the specific material being evaluated, supporting traceability.",
  },
  {
    question: "Does a COA replace independent testing?",
    answer: "No. A COA reports testing associated with a particular material or batch. Independent testing is a separate analytical process and may be appropriate depending on research requirements.",
  },
];

const ResearchLibrary = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "Research Library | Precision Peptides";
    let description = document.querySelector('meta[name="description"]');

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute(
      "content",
      "Explore Precision Peptides' research library for clear answers about peptide Certificates of Analysis, purity, HPLC, batch traceability, and analytical testing.",
    );
  }, []);

  const matchingQuestions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return questions;
    return questions.filter(({ question, answer }) => `${question} ${answer}`.toLowerCase().includes(normalizedQuery));
  }, [query]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-b from-primary/10 via-background to-background py-16 sm:py-24">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="container relative mx-auto max-w-4xl px-4 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <BookOpen className="h-4 w-4" /> Research Library
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Clear answers for <span className="gradient-text">better research</span></h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Explore practical, educational guidance on peptide documentation, testing, and analytical records.</p>
            <div className="relative mx-auto mt-8 max-w-xl">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search questions and answers" aria-label="Search research library" className="h-12 rounded-xl border-primary/20 bg-card pl-12" />
            </div>
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <Link to="/research-library/hplc-for-peptides" className="group mb-14 block rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-card p-6 transition-colors hover:border-primary/50 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">New guide · Analytical techniques</p><h2 className="font-display mt-2 text-2xl font-bold text-foreground sm:text-3xl">HPLC for Peptides: How Purity Is Tested</h2><p className="mt-2 max-w-2xl leading-7 text-muted-foreground">Understand HPLC chromatograms, retention time, purity results, and what this analytical method can—and cannot—tell you.</p></div><span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
          </Link>
          <Link to="/research-library/peptide-purity-explained" className="group mb-14 block rounded-2xl border border-primary/20 bg-card p-6 transition-colors hover:border-primary/50 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">New guide · Peptide analysis</p><h2 className="font-display mt-2 text-2xl font-bold text-foreground sm:text-3xl">Peptide Purity Explained: What Does 98% or 99% Mean?</h2><p className="mt-2 max-w-2xl leading-7 text-muted-foreground">Learn how purity is measured, why HPLC context matters, and why purity alone does not confirm identity.</p></div><span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
          </Link>
          <Link to="/research-library/what-is-ghk-cu" className="group mb-14 block rounded-2xl border border-primary/20 bg-card p-6 transition-colors hover:border-primary/50 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">New guide · Peptide chemistry</p><h2 className="font-display mt-2 text-2xl font-bold text-foreground sm:text-3xl">What Is GHK-Cu? A Guide to the Copper Peptide</h2><p className="mt-2 max-w-2xl leading-7 text-muted-foreground">Explore the GHK-Cu structure, copper-binding chemistry, research background, and analytical characterization.</p></div><span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
          </Link>
          <Link to="/research-library/peptides-vs-proteins" className="group mb-14 block rounded-2xl border border-primary/20 bg-card p-6 transition-colors hover:border-primary/50 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">New guide · Peptide basics</p><h2 className="font-display mt-2 text-2xl font-bold text-foreground sm:text-3xl">Peptides vs Proteins: What's the Difference?</h2><p className="mt-2 max-w-2xl leading-7 text-muted-foreground">Learn the key differences in amino-acid chain length, structure, classification, and biological organization.</p></div><span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
          </Link>
          <Link to="/research-library/peptide-bond-explained" className="group mb-14 block rounded-2xl border border-primary/20 bg-card p-6 transition-colors hover:border-primary/50 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">New guide · Peptide chemistry</p><h2 className="font-display mt-2 text-2xl font-bold text-foreground sm:text-3xl">Peptide Bond Explained: How Amino Acids Form Peptides</h2><p className="mt-2 max-w-2xl leading-7 text-muted-foreground">Understand the chemical links that connect amino acids into peptide chains and proteins.</p></div><span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
          </Link>
          <Link to="/research-library/peptide-synthesis" className="group mb-14 block rounded-2xl border border-primary/20 bg-card p-6 transition-colors hover:border-primary/50 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">New guide · Peptide chemistry</p><h2 className="font-display mt-2 text-2xl font-bold text-foreground sm:text-3xl">How Are Peptides Made? An Introduction to Peptide Synthesis</h2><p className="mt-2 max-w-2xl leading-7 text-muted-foreground">Explore amino acid coupling, SPPS, purification, and analytical characterization.</p></div><span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
          </Link>
          <Link to="/research-library/solid-phase-peptide-synthesis" className="group mb-14 block rounded-2xl border border-primary/20 bg-card p-6 transition-colors hover:border-primary/50 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">New guide · Peptide synthesis</p><h2 className="font-display mt-2 text-2xl font-bold text-foreground sm:text-3xl">Solid-Phase Peptide Synthesis (SPPS): A Guide</h2><p className="mt-2 max-w-2xl leading-7 text-muted-foreground">Explore resin attachment, amino-acid coupling, protecting groups, cleavage, and purification.</p></div><span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
          </Link>
          <Link to="/research-library/what-is-tb-500" className="group mb-14 block rounded-2xl border border-primary/20 bg-card p-6 transition-colors hover:border-primary/50 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">New guide · Research reference</p><h2 className="font-display mt-2 text-2xl font-bold text-foreground sm:text-3xl">What Is TB-500? TB-500 and Thymosin Beta-4 Explained</h2><p className="mt-2 max-w-2xl leading-7 text-muted-foreground">Understand the terminology, sequence relationships, and how research literature distinguishes these molecules.</p></div><span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
          </Link>
          <Link to="/research-library/what-are-peptides" className="group mb-14 block rounded-2xl border border-primary/20 bg-card p-6 transition-colors hover:border-primary/50 sm:p-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">New guide · Peptide basics</p><h2 className="font-display mt-2 text-2xl font-bold text-foreground sm:text-3xl">What Are Peptides? Amino Acids, Bonds and Chains</h2><p className="mt-2 max-w-2xl leading-7 text-muted-foreground">Learn how amino acids and peptide bonds form chains, and how sequence and structure shape their properties.</p></div><span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <article>
              <div className="mb-5 flex items-center gap-3 text-primary"><FileSearch className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-[0.16em]">Featured guide</span></div>
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">How to read a peptide Certificate of Analysis</h2>
              <div className="mt-7 space-y-5 text-[15px] leading-7 text-muted-foreground">
                <p>A Certificate of Analysis (COA) is one of the most important documents associated with a research peptide. It records analytical testing performed on a particular material or batch—not simply a statement that a peptide is “good.”</p>
                <p>Start by confirming the material name and batch number. The batch number connects the document to a specific production batch, which is essential for traceability and reproducible research.</p>
                <p>Purity is commonly discussed, but it should be read in context. A reported percentage does not automatically mean every characteristic of the material has been characterized. Look at the method, sample preparation, specification, and the rest of the analytical picture.</p>
                <p>Molecular-weight data can support identity characterization. HPLC is commonly used to examine purity and related components, while mass spectrometry can provide molecular-mass information. A useful COA explains how its reported results were obtained.</p>
              </div>
              <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <h3 className="font-display flex items-center gap-2 text-lg font-semibold text-foreground"><ShieldCheck className="h-5 w-5 text-primary" /> What to check first</h3>
                <ol className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
                  <li>1. The material tested</li><li>2. The matching batch number</li><li>3. Analytical methods used</li><li>4. Reported results and date</li><li>5. The issuing analyst or laboratory</li>
                </ol>
              </div>
            </article>

            <aside className="glass-card h-fit p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Common questions</p>
              <h2 className="font-display mt-2 text-2xl font-bold text-foreground">COA questions, answered</h2>
              {matchingQuestions.length ? (
                <Accordion type="single" collapsible className="mt-5">
                  {matchingQuestions.map(({ question, answer }, index) => <AccordionItem value={`question-${index}`} key={question}><AccordionTrigger className="gap-4 text-left text-foreground hover:no-underline">{question}</AccordionTrigger><AccordionContent className="leading-6 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}
                </Accordion>
              ) : <p className="mt-6 text-sm text-muted-foreground">No questions match “{query}”. Try another term.</p>}
            </aside>
          </div>
          <p className="mt-14 border-t border-border pt-6 text-center text-xs text-muted-foreground">Research and educational content only. Not for human consumption.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchLibrary;
