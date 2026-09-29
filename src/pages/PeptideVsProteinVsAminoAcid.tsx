import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CircleHelp, GitCompareArrows, Languages } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const META_TITLE = "Peptide vs Protein vs Amino Acid: What's the Difference?";
const META_DESCRIPTION =
  "Understand the difference between peptides, proteins and amino acids, including their structure, size, peptide bonds and how they relate to each other.";

const EXAMPLE_AMINO_ACIDS = [
  "Glycine",
  "Alanine",
  "Leucine",
  "Lysine",
  "Histidine",
  "Cysteine",
  "Glutamic acid",
  "Phenylalanine",
];

const STRUCTURE_LEVELS = [
  "Primary structure",
  "Secondary structure",
  "Tertiary structure",
  "Quaternary structure",
];

const TECHNIQUES = [
  "HPLC",
  "Mass spectrometry",
  "Electrophoresis",
  "Spectroscopy",
  "Chromatography",
  "Structural analysis",
];

const SUMMARY = [
  { term: "Amino acid", meaning: "building block" },
  { term: "Peptide", meaning: "amino acid chain" },
  { term: "Protein", meaning: "larger, structurally organized molecule made from amino acid chains" },
];

const COMPARISON = {
  columns: ["Feature", "Amino acid", "Peptide", "Protein"],
  rows: [
    ["What is it?", "Individual building block", "Chain of amino acids", "Larger biological molecule"],
    [
      "Made from",
      "Atoms forming an amino acid structure",
      "Amino acid residues",
      "One or more polypeptide chains",
    ],
    ["Peptide bonds", "No chain bond", "Yes", "Yes"],
    ["Structure", "Small molecule", "Shorter chain", "Often highly folded structure"],
    ["Sequence", "Not applicable", "Important", "Critical"],
    ["Molecular size", "Small", "Variable", "Generally larger"],
    [
      "Example category",
      "Glycine",
      "A short peptide sequence",
      "Enzymes, receptors, structural proteins",
    ],
  ],
};

const FLOW = [
  { label: "Amino acids", step: "Peptide bond formation" },
  { label: "Peptide", step: "Increasing chain length and structural complexity" },
  { label: "Polypeptide", step: "Folding and assembly" },
  { label: "Protein", step: null },
];

// TODO: confirm these slugs match your router.
const RELATED = [
  { to: "/research-library/how-to-read-a-peptide-coa", label: "How to Read a Peptide COA" },
  {
    to: "/research-library/hplc-for-peptides",
    label: "HPLC for Peptides: How Peptide Purity Is Tested",
  },
  {
    to: "/research-library/what-is-molecular-weight-in-peptides",
    label: "What Is Molecular Weight in Peptides?",
  },
];

const faqs = [
  {
    q: "Which is smaller: an amino acid or a peptide?",
    a: "An individual amino acid is smaller. A peptide contains multiple amino acid residues connected by peptide bonds.",
  },
  {
    q: "Is a peptide a protein?",
    a: "Peptides and proteins are closely related, but the terms are not interchangeable. Peptides are generally shorter, while proteins usually form larger and more structurally complex molecules.",
  },
  {
    q: "How many amino acids make a protein?",
    a: "There is no single universal number that defines a protein. Proteins are generally larger polypeptide molecules with defined three-dimensional structures.",
  },
  {
    q: "What is the difference between an amino acid and a protein?",
    a: "An amino acid is an individual molecular building block. A protein is a larger molecule composed of one or more amino acid chains.",
  },
  {
    q: "What is the difference between a peptide and an amino acid?",
    a: "An amino acid is one building block. A peptide is a chain of amino acid residues linked by peptide bonds.",
  },
  {
    q: "Are all peptides proteins?",
    a: "No. Peptides and proteins are related but are generally distinguished by chain length, structural organization and scientific context.",
  },
  {
    q: "What connects amino acids in proteins?",
    a: "Amino acids within protein chains are connected by peptide bonds.",
  },
];

const H2 = "font-display text-2xl font-bold text-foreground";

const Section = ({ title, children }) => (
  <section>
    <h2 className={H2}>{title}</h2>
    <div className="mt-3 space-y-4">{children}</div>
  </section>
);

const PillList = ({ items }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((item) => (
      <li
        key={item}
        className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-foreground"
      >
        {item}
      </li>
    ))}
  </ul>
);

const Callout = ({ icon: Icon, title, children }) => (
  <aside className="rounded-xl border border-primary/20 bg-primary/5 p-6">
    <h3 className="font-display flex items-center gap-2 text-xl font-semibold text-foreground">
      <Icon className="h-5 w-5 text-primary" aria-hidden="true" /> {title}
    </h3>
    <div className="mt-3 space-y-3">{children}</div>
  </aside>
);

const PeptideVsProteinVsAminoAcid = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${META_TITLE} | Precision Peptides`;

    let description = document.querySelector('meta[name="description"]');
    const created = !description;
    const previousContent = description?.getAttribute("content");

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    description.setAttribute("content", META_DESCRIPTION);

    return () => {
      document.title = previousTitle;
      if (created) description.remove();
      else if (previousContent !== null && previousContent !== undefined) {
        description.setAttribute("content", previousContent);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="border-b border-primary/10 bg-gradient-to-b from-primary/10 via-background to-background py-14 sm:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <Link
              to="/research-library"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Research Library
            </Link>
            <div className="mt-8 flex items-center gap-3 text-primary">
              <GitCompareArrows className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em]">
                Research reference
              </span>
            </div>
            <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Peptide vs Protein vs Amino Acid:{" "}
              <span className="gradient-text">What's the Difference?</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Understand how amino acids, peptides and proteins differ in structure and size, and how
              peptide bonds connect them.
            </p>
          </div>
        </section>

        {/* Article */}
        <article className="container mx-auto max-w-3xl px-4 py-14 sm:py-20">
          <div className="space-y-8 text-[16px] leading-8 text-muted-foreground">
            <p className="text-lg">
              Amino acids, peptides and proteins are closely related, but they are not the same
              thing.
            </p>

            <Callout icon={GitCompareArrows} title="The simplest way to see it">
              <ul className="space-y-1">
                <li>
                  <span className="font-medium text-foreground">Amino acids</span> are the building
                  blocks.
                </li>
                <li>
                  <span className="font-medium text-foreground">Peptides</span> are chains of amino
                  acids.
                </li>
                <li>
                  <span className="font-medium text-foreground">Proteins</span> are larger,
                  structurally complex molecules made from one or more polypeptide chains.
                </li>
              </ul>
            </Callout>

            <p>
              All three are connected through the same underlying chemistry: amino acids joined
              together through peptide bonds.
            </p>

            <Section title="What is an amino acid?">
              <p>
                An amino acid is a small organic molecule that contains an amino group, a carboxyl
                group and a variable side chain. The side chain, often called the R group, is what
                makes one amino acid chemically different from another.
              </p>
              <p>
                There are 20 standard amino acids commonly used to construct proteins. Examples
                include:
              </p>
              <PillList items={EXAMPLE_AMINO_ACIDS} />
              <p>
                Each has its own chemical properties. Think of an amino acid as one building block.
              </p>
            </Section>

            <Section title="What is a peptide?">
              <p>
                A peptide is a chain of amino acid residues connected through peptide bonds. When
                two amino acids connect, they form a dipeptide. Three amino acids form a tripeptide.
                Longer chains may be referred to as oligopeptides or polypeptides depending on their
                length and the terminology being used.
              </p>
              <p className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-center font-medium text-foreground">
                Amino acid → peptide → longer polypeptide
              </p>
              <p>
                The important thing is that a peptide is no longer an individual amino acid. It is a
                chain.
              </p>
            </Section>

            <Section title="What is a protein?">
              <p>
                Proteins are larger biological molecules made from amino acid chains. A protein's
                amino acid sequence is its primary structure. The chain can then adopt more complex
                structural arrangements, including secondary, tertiary and, in some cases,
                quaternary structure.
              </p>
              <p>
                Protein structure is closely connected to function. NIH describes proteins as long
                chains of amino acids that fold into specific three-dimensional shapes, with the
                resulting structures supporting different biological functions.
              </p>
            </Section>

            <Section title="Peptide vs protein vs amino acid: the basic difference">
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm leading-6">
                  <caption className="sr-only">
                    Simplified comparison of amino acids, peptides and proteins
                  </caption>
                  <thead className="bg-muted/40 text-foreground">
                    <tr>
                      {COMPARISON.columns.map((col) => (
                        <th key={col} scope="col" className="px-4 py-3 font-semibold">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.rows.map(([feature, ...cells]) => (
                      <tr key={feature} className="border-t border-border align-top">
                        <th scope="row" className="px-4 py-3 font-medium text-foreground">
                          {feature}
                        </th>
                        {cells.map((cell, i) => (
                          <td key={i} className="px-4 py-3">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm">
                The table is a simplified conceptual comparison. Scientific terminology can overlap,
                particularly around the boundary between long peptides, polypeptides and proteins.
              </p>
            </Section>

            <Section title="How are they connected?">
              <ol className="rounded-lg border border-border p-4">
                {FLOW.map(({ label, step }) => (
                  <li key={label}>
                    <p className="font-display font-semibold text-foreground">{label}</p>
                    {step && (
                      <p className="my-2 pl-4 text-sm">
                        <span aria-hidden="true">↓ </span>
                        {step}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
              <p>
                This is a useful model for understanding the relationship, although biology is more
                complex than a simple linear progression.
              </p>
            </Section>

            <Section title="What is a peptide bond?">
              <p>
                A peptide bond is the covalent linkage that connects amino acids. It forms between
                the carboxyl group of one amino acid and the amino group of another. The reaction
                releases water and creates an amide linkage.
              </p>
              <p>
                This is what allows individual amino acids to become chains. Without peptide bonds,
                there would be no peptide or protein chains.
              </p>
            </Section>

            <Section title="Is a peptide just a small protein?">
              <p>
                This is where terminology gets interesting. You will sometimes see peptides
                described as smaller versions of proteins. That is useful for understanding the
                general relationship, but it is not a complete scientific definition. There is no
                single amino-acid number that universally separates every peptide from every
                protein.
              </p>
              <p>
                For example, the NCBI Medical Subject Headings system describes oligopeptides as
                approximately 2 to 12 amino acids and polypeptides as approximately 13 or more amino
                acids, while classifying proteins separately. Other scientific sources use different
                conventions.
              </p>
              <p>
                Therefore, it is better to think about chain length, structure and biological
                context together, rather than relying on one numerical cutoff.
              </p>
            </Section>

            <Section title="Does size determine function?">
              <p>
                Not by itself. A molecule's size is one characteristic, but sequence and structure
                are equally important. Two peptides can have similar numbers of amino acids but
                completely different sequences. Likewise, proteins with different sequences can fold
                into very different structures and perform very different functions.
              </p>
              <p>
                For proteins in particular, the amino acid sequence contributes to the final
                three-dimensional structure, which is closely related to biological activity.
              </p>
            </Section>

            <Section title="Why does amino acid sequence matter?">
              <p>
                Imagine the amino acids as letters in a word. Changing the order can change the
                meaning of the word. The same general idea applies to peptide and protein sequences.
              </p>
              <Callout icon={Languages} title="Same residues, different sequence">
                <p>
                  <span className="font-medium text-foreground">Gly-Lys-Ala-Ser</span> and{" "}
                  <span className="font-medium text-foreground">Ser-Ala-Lys-Gly</span> contain the
                  same four amino acid types, but they are different sequences.
                </p>
              </Callout>
              <p>
                Different sequences can result in different chemical and structural properties.
                This is why peptide identification relies on more than simply knowing the
                approximate molecular size.
              </p>
            </Section>

            <Section title="How are peptides and proteins different structurally?">
              <p>
                Peptides are generally shorter and often have less complex structural organization
                than proteins. Proteins can form:
              </p>
              <PillList items={STRUCTURE_LEVELS} />
              <p>
                Secondary structures include arrangements such as alpha helices and beta sheets,
                while tertiary structure describes the overall three-dimensional organization of a
                polypeptide chain. Some proteins also contain multiple polypeptide chains assembled
                into a larger complex.
              </p>
              <p>
                Peptides can also adopt defined structures, including helical and cyclic
                conformations. So "peptide = unstructured" would also be an oversimplification.
              </p>
            </Section>

            <Section title="How are peptides and proteins studied?">
              <p>
                Researchers can characterize peptides and proteins using several analytical and
                biochemical techniques. Depending on the research question, these can include:
              </p>
              <PillList items={TECHNIQUES} />
              <p>
                For synthetic peptides, HPLC can be used to assess purity, while mass spectrometry
                can help characterize molecular mass. This is why understanding analytical
                terminology is important when reading a peptide Certificate of Analysis.
              </p>
              <nav aria-label="Related guides" className="rounded-lg border border-border p-4">
                <p className="font-display font-semibold text-foreground">See also</p>
                <ul className="mt-2 space-y-1">
                  {RELATED.map(({ to, label }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        className="font-medium text-primary transition-colors hover:text-accent"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Section>

            <Section title="A simple analogy">
              <p>
                Think of a language. An amino acid is like a letter. A peptide is like a short word
                or phrase made from those letters. A protein is like a much larger, highly organized
                piece of information built from the same basic alphabet.
              </p>
              <p>
                The analogy isn't chemically exact, but it helps explain why sequence matters. The
                building blocks may be the same, but the arrangement creates different molecules.
              </p>
            </Section>

            <Section title="Final takeaway">
              <p>
                Amino acids, peptides and proteins are different levels of molecular organization
                built around the same fundamental chemistry.
              </p>
              <dl className="space-y-2">
                {SUMMARY.map(({ term, meaning }) => (
                  <div key={term} className="flex flex-wrap gap-x-2">
                    <dt className="font-display font-semibold text-foreground">{term} =</dt>
                    <dd>{meaning}</dd>
                  </div>
                ))}
              </dl>
              <p>
                Once this relationship is clear, concepts such as peptide synthesis, HPLC purity,
                molecular weight, protein structure and peptide characterization become much easier
                to understand.
              </p>
            </Section>
          </div>

          {/* FAQ */}
          <section className="mt-14 border-t border-border pt-10">
            <div className="flex items-center gap-3 text-primary">
              <CircleHelp className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em]">
                Frequently asked questions
              </span>
            </div>
            <h2 className="font-display mt-3 text-3xl font-bold text-foreground">
              Peptide, protein and amino acid questions, answered
            </h2>
            <Accordion type="single" collapsible className="mt-5">
              {faqs.map(({ q, a }, index) => (
                <AccordionItem value={`faq-${index}`} key={q}>
                  <AccordionTrigger className="gap-4 text-left text-foreground hover:no-underline">
                    {q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-6 text-muted-foreground">
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <p className="mt-14 text-center text-xs text-muted-foreground">
            Research and educational information only. Not for human consumption.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PeptideVsProteinVsAminoAcid;