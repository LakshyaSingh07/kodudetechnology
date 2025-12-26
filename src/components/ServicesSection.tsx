import { Code2, Palette, Search, Smartphone, Zap, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, responsive, modern websites built with the latest technologies. Mobile-optimized and lightning-fast loading.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean, professional layouts focused on building user trust and guiding visitors to take action.",
  },
  {
    icon: Search,
    title: "Basic SEO",
    description: "Every website includes fundamental SEO setup — meta tags, structured data, and Google-friendly architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Perfect experience across all devices. Your clients browse on mobile — your website should shine there.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed. Faster websites rank better and convert more visitors into leads.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "SSL certificates, secure hosting, and reliable uptime. Your business is always online.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="services" 
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className={`text-primary font-light text-sm uppercase tracking-[0.3em] mb-6 block transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.1s' }}>
            Services
          </span>
          <div className={`luxury-divider mb-8 transition-all duration-700 origin-center ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.2s' }} />
          
          {/* Text reveal */}
          <div className="overflow-hidden mb-4">
            <h2 className={`font-display text-3xl lg:text-5xl font-normal text-foreground leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`} style={{ transitionDelay: '0.3s' }}>
              Everything Your Business
            </h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h2 className={`font-display text-3xl lg:text-5xl font-normal leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`} style={{ transitionDelay: '0.4s' }}>
              <span className="gold-shimmer italic">Needs Online</span>
            </h2>
          </div>
          
          <p className={`text-lg text-muted-foreground font-light leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
            Comprehensive web solutions designed to establish trust and generate enquiries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group card-luxury rounded-lg p-8 lg:p-10 transition-all duration-700 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary/60 group-hover:shadow-glow transition-all duration-500">
                <service.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;