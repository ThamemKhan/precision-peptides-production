import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Atom, CircleHelp, Link2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const META_TITLE = "What Are Amino Acids? The Building Blocks of Peptides";
const META_DESCRIPTION =
  "Learn what amino acids are, what they are made of, how their side chains differ, and how amino acids form peptides and proteins.";

const STANDARD_AMINO_ACIDS = [
  "Glycine",
  "Alanine",
  "Valine",
  "Leucine",
  "Isoleucine",
  "Serine",
  "Threonine",
  "Lysine",
  "Arginine",
  "Histidine",
  "Aspartic acid",
  "Glutamic acid",
  "Phenylalanine",
  "Tyrosine",
  "Tryptophan",
  "Cysteine",
  "Methionine",
  "Asparagine",
  "Glutamine",
  "Proline",
];

const SIDE_CHAIN_PROPERTIES = [
  "Size",
  "Charge",
  "Polarity",
  "Hydrophobicity",
  "Chemical reactivity",
  "Ability to form specific interactions",
];

const RESEARCH_CONSIDERATIONS = [
  "Amino acid sequence",
  "Molecular weight",
  "Chemical modifications",
  "Purity",
  "Structure",
  "Analytical characterization",
];

const LEVELS = [
  { term: "Amino acid", definition: "One individual building block." },
  {
    term: "Peptide",
    definition: "A chain of amino acid residues connected by peptide bonds.",
  },
  {
    term: "Protein",
    definition:
      "A larger biological molecule consisting of one or more polypeptide chains that adopt specific structures.",
  },
];

const faqs = [
  {
    q: "What are amino acids made of?",
    a: "Amino acids generally contain carbon, hydrogen, oxygen and nitrogen. Some also contain sulfur or other elements.",
  },
  {
    q: "How many standard amino acids are there?",
    a: "There are 20 standard amino acids commonly used to build proteins in biological systems.",
  },
  {
    q: "Are amino acids the same as peptides?",
    a: "No. An amino acid is an individual molecular building block, while a peptide contains multiple amino acid residues linked by peptide bonds.",
  },
  {
    q: "What connects amino acids together?",
    a: "Peptide bonds connect amino acid residues within peptide and protein chains.",
  },
  {
    q: "Why are amino acids important?",
    a: "They are the fundamental building blocks used to construct peptides and proteins and play important roles in many biological processes.",
  },
  {
    q: "Does amino acid order matter?",
    a: "Yes. The sequence of amino acids influences the structure and properties of the resulting peptide or protein.",
  },
];

const H2 = "font-display text-2xl font-bold text-foreground";

const Section = ({ title, children }) => (
  <section>
    <h2 className={H2}>{title}</h2>
    <div className="mt-3 space-y-4">{children}</div>
  </section>
);

const PillList = ({ items, className = "" }) => (
  <ul className={`flex flex-wrap gap-2 ${className}`}>
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

const AminoAcids = () => {
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
              <Atom className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-[0.16em]">
                Research reference
              </span>
            </div>
            <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              What Are Amino Acids?{" "}
              <span className="gradient-text">The Building Blocks of Peptides and Proteins</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Learn what amino acids are, what they are made of, how their side chains differ, and
              how they assemble into peptides and proteins.
            </p>
          </div>
        </section>

        {/* Article */}
        <article className="container mx-auto max-w-3xl px-4 py-14 sm:py-20">
          <div className="space-y-8 text-[16px] leading-8 text-muted-foreground">
            <p className="text-lg">
              Amino acids are small organic molecules that serve as the fundamental building blocks
              of peptides and proteins.
            </p>
            <p>
              The human body and other living systems use amino acids to build proteins, peptides
              and other biologically important molecules. Although amino acids share a common
              structural framework, their side chains give them different chemical properties.
              Understanding amino acids is therefore the first step toward understanding peptides,
              proteins and peptide chemistry.
            </p>

            <Section title="What is an amino acid?">
              <p>
                An amino acid is an organic molecule that generally contains an amino group and a
                carboxyl group. The standard amino acids found in proteins also contain a central
                carbon, a hydrogen atom and a variable side chain, commonly represented by the
                letter R.
              </p>
              <p className="rounded-lg border border-border bg-muted/30 px-4 py-3 text-center font-medium text-foreground">
                Amino group + central carbon + carboxyl group + R group
              </p>
              <p>
                The R group is particularly important because it varies from one amino acid to
                another. That variation gives different amino acids different chemical properties.
              </p>
            </Section>

            <Section title="What are amino acids made of?">
              <p>
                Amino acids generally contain carbon, hydrogen, oxygen and nitrogen. Some also
                contain additional elements such as sulfur. The exact composition depends on the
                amino acid.
              </p>
              <p>
                For example, cysteine and methionine contain sulfur in their side chains, which
                gives them chemical properties that distinguish them from many other amino acids.
              </p>
            </Section>

            <Section title="How many amino acids are there?">
              <p>
                There are 20 standard amino acids commonly used to build proteins in biological
                systems. These include:
              </p>
              <PillList items={STANDARD_AMINO_ACIDS} />
              <p>
                Each has its own chemical structure and side chain. This relatively small set of
                building blocks can be arranged into an enormous number of different sequences.
              </p>
            </Section>

            <Section title="Why are amino acid side chains important?">
              <p>
                Think of amino acids as a set of molecular building blocks. They all share a common
                framework, but each one has a different side chain. These side chains can differ in:
              </p>
              <PillList items={SIDE_CHAIN_PROPERTIES} />
              <p>
                For example, some side chains tend to interact favorably with water, while others
                are more hydrophobic. Cysteine is particularly notable because its sulfur-containing
                side chain can participate in disulfide bond formation under appropriate
                conditions.
              </p>
              <p>
                These chemical differences become especially important when amino acids are
                assembled into longer chains.
              </p>
            </Section>

            <Section title="How do amino acids form peptides?">
              <p>
                Amino acids can connect through peptide bonds. The carboxyl group of one amino acid
                reacts with the amino group of another. This creates a covalent bond between the two
                amino acids and releases water during the condensation reaction.
              </p>
              <ul className="space-y-2 rounded-lg border border-border bg-muted/30 px-4 py-3 font-medium text-foreground">
                <li>Amino acid + Amino acid → Dipeptide</li>
                <li>Dipeptide + Amino acid → Tripeptide</li>
              </ul>
              <p>
                Continue adding amino acids and a longer peptide chain can be produced. This basic
                chemical relationship is central to peptide and protein structure.
              </p>
            </Section>

            <Section title="Amino acids, peptides and proteins">
              <p>
                It is useful to think of these three terms as different levels of molecular
                organization.
              </p>
              <dl className="space-y-3">
                {LEVELS.map(({ term, definition }) => (
                  <div key={term} className="rounded-lg border border-border p-4">
                    <dt className="font-display font-semibold text-foreground">{term}</dt>
                    <dd className="mt-1">{definition}</dd>
                  </div>
                ))}
              </dl>
              <p>
                Proteins can contain hundreds or more amino acid residues, although size alone does
                not provide a universal definition separating proteins from peptides.
              </p>
            </Section>

            <Section title="Does the order of amino acids matter?">
              <p>
                Very much. The sequence of amino acids is known as the primary structure of a
                peptide or protein. Changing the order of amino acids changes the sequence.
              </p>
              <aside className="rounded-xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="font-display flex items-center gap-2 text-xl font-semibold text-foreground">
                  <Link2 className="h-5 w-5 text-primary" aria-hidden="true" /> Same residues,
                  different molecule
                </h3>
                <p className="mt-3">
                  <span className="font-medium text-foreground">Gly-Ala-Lys-Ser</span> is
                  chemically different from{" "}
                  <span className="font-medium text-foreground">Ser-Lys-Ala-Gly</span>, even though
                  both sequences contain the same four amino acid types.
                </p>
              </aside>
              <p>
                For proteins, amino acid sequence plays a major role in determining how the chain
                folds into its three-dimensional structure. NIH notes that naturally occurring
                proteins use 20 amino acids with different structures and chemical properties, and
                that their sequence contributes to the resulting three-dimensional shape.
              </p>
            </Section>

            <Section title="What are amino acid residues?">
              <p>
                Once an amino acid becomes part of a peptide or protein chain, it is commonly
                referred to as an amino acid residue. This terminology is useful because the amino
                acid is no longer present as a completely independent molecule.
              </p>
              <p>
                The amino acids are connected through peptide bonds and form part of the larger
                chain.
              </p>
            </Section>

            <Section title="Are all amino acids found in proteins?">
              <p>
                Not necessarily. There are many naturally occurring amino acids and synthetic amino
                acid derivatives that are not among the 20 standard amino acids used to build
                proteins.
              </p>
              <p>
                Researchers can also use modified or non-standard amino acids when designing
                synthetic peptides. This expands the chemical possibilities available in peptide
                research beyond the standard biological building blocks.
              </p>
            </Section>

            <Section title="Why are amino acids important in peptide research?">
              <p>
                A peptide's amino acid sequence is fundamental to its identity. Changing even one
                position in a sequence can produce a different peptide. Researchers therefore pay
                close attention to:
              </p>
              <PillList items={RESEARCH_CONSIDERATIONS} />
              <p>
                Understanding amino acids also helps explain why two peptides with similar lengths
                can behave very differently.
              </p>
            </Section>

            <Section title="How are amino acids used in peptide synthesis?">
              <p>
                In chemical peptide synthesis, amino acids are added sequentially to build a desired
                peptide sequence. One widely used method is solid-phase peptide synthesis, or SPPS.
              </p>
              <p>
                The amino acid building blocks are coupled in a controlled sequence, followed by
                additional processing steps such as cleavage and purification. The final product can
                then be analytically characterized using techniques such as HPLC and mass
                spectrometry.
              </p>
            </Section>

            <Section title="Final takeaway">
              <p>
                Amino acids are the basic molecular building blocks behind peptides and proteins.
                Their common structure allows them to form peptide bonds, while their different side
                chains give them distinct chemical properties.
              </p>
              <p>
                Once you understand amino acids, the next step is understanding how those building
                blocks combine to form peptides and how longer chains develop into complex proteins.
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
              Amino acid questions, answered
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

export default AminoAcids;