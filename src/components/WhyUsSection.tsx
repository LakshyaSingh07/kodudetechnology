import { Check, IndianRupee, Home, FileCheck, Clock, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    icon: IndianRupee,
    title: "Premium at Affordable Pricing",
    description: "High-quality designs without the agency price tag. Best value for Indian businesses.",
  },
  {
    icon: Home,
    title: "Real Estate Focused",
    description: "We understand property businesses. Our designs are built to showcase listings and generate buyer interest.",
  },
  {
    icon: FileCheck,
    title: "Free Homepage Sample",
    description: "See your website before you commit. We create a free sample so you know exactly what you're getting.",
  },
  {
    icon: Clock,
    title: "Fast 7-Day Delivery",
    description: "Quick turnaround without compromising quality. Your website ready in about a week.",
  },
  {
    icon: BarChart3,
    title: "Built for Lead Generation",
    description: "Strategic WhatsApp CTAs, contact forms, and trust elements designed to convert visitors.",
  },
  {
    icon: Check,
    title: "Transparent Process",
    description: "No hidden costs. Clear communication at every step. You're always in the loop.",
  },
];

const WhyUsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="why-us" 
      className="py-20 lg:py-28 bg-navy-gradient text-navy-foreground"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            What Sets KoDude Apart
          </h2>
          <p className="text-lg text-navy-foreground/70">
            We're not just building websites — we're building your business's digital foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group p-6 rounded-2xl border border-navy-foreground/10 hover:border-accent/30 bg-navy-foreground/5 hover:bg-navy-foreground/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                  <reason.icon className="text-accent" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-navy-foreground/70 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
