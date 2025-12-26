import { Code2, Palette, Search, Smartphone, Zap, Shield } from "lucide-react";

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
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
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
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="text-accent" size={26} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
