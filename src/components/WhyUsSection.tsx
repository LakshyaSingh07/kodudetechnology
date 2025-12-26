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
      className="py-24 lg:py-32 bg-card relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary font-light text-sm uppercase tracking-[0.3em] mb-6 block">
            Why Choose Us
          </span>
          <div className="luxury-divider mb-8" />
          <h2 className="font-display text-3xl lg:text-5xl font-normal text-foreground mb-8 leading-tight">
            What Sets KoDude <br className="hidden lg:block" />
            <span className="text-gradient italic">Apart</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            We're not just building websites — we're building your business's digital foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group card-luxury rounded-lg p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary/60 group-hover:shadow-glow transition-all duration-500">
                  <reason.icon className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">{reason.description}</p>
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