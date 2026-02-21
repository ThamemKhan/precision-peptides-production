import { Beaker, ShieldCheck, Microscope, FlaskConical } from "lucide-react";

const features = [
  {
    icon: Beaker,
    title: "99%+ Purity",
    description: "Every peptide undergoes rigorous HPLC testing to ensure pharmaceutical-grade purity."
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Certificate of Analysis provided with every order for complete transparency."
  },
  {
    icon: Microscope,
    title: "Research Grade",
    description: "Designed exclusively for laboratory research and development purposes."
  },
  {
    icon: FlaskConical,
    title: "Expert Support",
    description: "Our scientific team is available to assist with your research needs."
  }
];

export const Features = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Why Choose </span>
            <span className="gradient-text">Precision Peptides</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to advancing scientific research with the highest quality peptides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
