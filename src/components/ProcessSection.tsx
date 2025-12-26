import { FileSearch, ThumbsUp, CreditCard, Laptop, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    number: "01",
    title: "Free Sample",
    description: "We create a homepage mockup for you — completely free, no strings attached.",
  },
  {
    icon: ThumbsUp,
    number: "02",
    title: "Approval",
    description: "Review the sample. Request changes or approve to move forward.",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Advance Payment",
    description: "A simple 50% advance to begin the full development process.",
  },
  {
    icon: Laptop,
    number: "04",
    title: "Design & Development",
    description: "We build your complete website with regular progress updates.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Launch & Support",
    description: "Your website goes live. We provide 7 days of post-launch support.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, transparent, and built for your convenience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-8 md:space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                    index % 2 === 0 ? "" : "md:direction-rtl"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex items-center gap-4 md:gap-6 ${
                      index % 2 === 0 
                        ? "md:justify-end md:text-right md:pr-8" 
                        : "md:col-start-2 md:pl-8"
                    }`}
                  >
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="text-accent" size={24} />
                      </div>
                      <div>
                        <span className="text-accent font-bold text-sm">{step.number}</span>
                        <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-4 border-card" />

                  {/* Empty space for alternating layout */}
                  {index % 2 === 0 ? (
                    <div className="hidden md:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
