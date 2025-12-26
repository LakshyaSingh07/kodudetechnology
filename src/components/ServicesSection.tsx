import { Code2, Palette, Search, Smartphone, Zap, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Fast, responsive, modern websites built with the latest technologies. Mobile-optimized and lightning-fast loading.",
    color: "purple",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean, professional layouts focused on building user trust and guiding visitors to take action.",
    color: "coral",
  },
  {
    icon: Search,
    title: "Basic SEO",
    description: "Every website includes fundamental SEO setup — meta tags, structured data, and Google-friendly architecture.",
    color: "cyan",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Perfect experience across all devices. Your clients browse on mobile — your website should shine there.",
    color: "pink",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed. Faster websites rank better and convert more visitors into leads.",
    color: "yellow",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "SSL certificates, secure hosting, and reliable uptime. Your business is always online.",
    color: "purple",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="services" 
      className="py-20 lg:py-28 bg-background relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-vibrant-coral/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-vibrant-purple/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-secondary text-secondary-foreground font-semibold text-sm uppercase tracking-wider mb-4">
            Services
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Everything Your Business Needs Online
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive web solutions designed to establish trust and generate enquiries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                service.color === 'purple' ? 'bg-vibrant-purple/10 group-hover:bg-vibrant-purple/20' :
                service.color === 'coral' ? 'bg-vibrant-coral/10 group-hover:bg-vibrant-coral/20' :
                service.color === 'cyan' ? 'bg-vibrant-cyan/10 group-hover:bg-vibrant-cyan/20' :
                service.color === 'pink' ? 'bg-vibrant-pink/10 group-hover:bg-vibrant-pink/20' :
                'bg-vibrant-yellow/10 group-hover:bg-vibrant-yellow/20'
              }`}>
                <service.icon className={`${
                  service.color === 'purple' ? 'text-vibrant-purple' :
                  service.color === 'coral' ? 'text-vibrant-coral' :
                  service.color === 'cyan' ? 'text-vibrant-cyan' :
                  service.color === 'pink' ? 'text-vibrant-pink' :
                  'text-vibrant-yellow'
                }`} size={26} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
