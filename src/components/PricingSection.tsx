import { Button } from "@/components/ui/button";
import { Check, Star, MessageCircle, Sparkles, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WHATSAPP_NUMBER = "919876543210";

const packages = [
  {
    name: "Starter",
    description: "Perfect for real estate agents & small businesses",
    price: "₹5,999",
    priceNote: "one-time",
    popular: true,
    features: [
      "1–3 page static website",
      "Property showcase sections",
      "WhatsApp enquiry integration",
      "Basic SEO setup",
      "Domain + hosting (1 year)",
      "7 days post-launch support",
      "Mobile responsive design",
      "SSL certificate included",
    ],
    cta: "Get Started Now",
    whatsappMessage: "Hi! I'm interested in the Starter Package at ₹5,999. Can we discuss?",
  },
  {
    name: "Premium",
    description: "For growing businesses needing more features",
    price: "₹12,999",
    priceNote: "one-time",
    popular: false,
    badge: "Best Value",
    features: [
      "5–8 page dynamic website",
      "Advanced property listings",
      "Contact form with email alerts",
      "Advanced SEO optimization",
      "Domain + hosting (1 year)",
      "30 days post-launch support",
      "Google Analytics integration",
      "Social media integration",
      "Speed optimization",
      "Admin training session",
    ],
    cta: "Choose Premium",
    whatsappMessage: "Hi! I'm interested in the Premium Package at ₹12,999. Can we discuss?",
  },
  {
    name: "Custom",
    description: "Tailored solutions for unique requirements",
    price: "Custom",
    priceNote: "get a quote",
    popular: false,
    features: [
      "Unlimited pages",
      "Custom design & features",
      "E-commerce integration",
      "CMS for easy updates",
      "Priority support",
      "Ongoing maintenance options",
      "API integrations",
      "Custom functionality",
    ],
    cta: "Contact Us",
    whatsappMessage: "Hi! I'm interested in a Custom Package for my business. Can we discuss my requirements?",
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="pricing" 
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Subtle glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary font-light text-sm uppercase tracking-[0.3em] mb-6 block">
            Pricing
          </span>
          <div className="luxury-divider mb-8" />
          <h2 className="font-display text-3xl lg:text-5xl font-normal text-foreground mb-8 leading-tight">
            Simple, Transparent <br className="hidden lg:block" />
            <span className="text-gradient italic">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Choose the package that fits your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, pkgIndex) => (
            <div 
              key={pkg.name}
              className={`relative card-luxury rounded-lg overflow-hidden transition-all duration-700 flex flex-col ${pkg.popular ? 'gold-border shadow-glow' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${pkgIndex * 150}ms` }}
            >
              {/* Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-gold text-primary-foreground px-4 py-1.5 text-xs font-medium uppercase tracking-wider flex items-center gap-1">
                  <Star size={12} fill="currentColor" />
                  Most Popular
                </div>
              )}
              {pkg.badge && !pkg.popular && (
                <div className="absolute top-0 right-0 bg-champagne text-primary-foreground px-4 py-1.5 text-xs font-medium uppercase tracking-wider flex items-center gap-1">
                  <Sparkles size={12} />
                  {pkg.badge}
                </div>
              )}

              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <h3 className="font-display text-2xl text-foreground mb-2">{pkg.name} Package</h3>
                <p className="text-muted-foreground text-sm font-light mb-8">{pkg.description}</p>

                <div className="flex items-baseline gap-2 mb-10">
                  <span className={`font-display text-gradient ${pkg.price === "Custom" ? 'text-3xl lg:text-4xl' : 'text-4xl lg:text-5xl'}`}>
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground font-light text-sm">{pkg.priceNote}</span>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feature, index) => (
                    <div 
                      key={feature} 
                      className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${300 + pkgIndex * 100 + index * 30}ms` }}
                    >
                      <div className="w-5 h-5 rounded border border-primary/50 flex items-center justify-center flex-shrink-0">
                        <Check className="text-primary" size={10} />
                      </div>
                      <span className="text-foreground text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mt-auto">
                  <Button 
                    variant={pkg.popular ? "default" : "outline"} 
                    size="lg" 
                    className="w-full" 
                    asChild
                  >
                    <a href="#contact">{pkg.cta}</a>
                  </Button>
                  <Button variant="whatsapp" size="default" className="w-full" asChild>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2" size={14} />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className={`max-w-2xl mx-auto mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone size={14} />
            <span className="font-light text-sm">
              Not sure which package is right for you?{" "}
              <a href="#contact" className="text-primary hover:underline">
                Let's talk
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;