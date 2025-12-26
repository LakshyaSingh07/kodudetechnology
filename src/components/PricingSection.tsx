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
      className="py-20 lg:py-28 bg-background"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the package that fits your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, pkgIndex) => (
            <div 
              key={pkg.name}
              className={`relative bg-card rounded-3xl border-2 ${pkg.popular ? 'border-accent shadow-xl' : 'border-border'} overflow-hidden transition-all duration-700 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${pkgIndex * 150}ms` }}
            >
              {/* Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1.5 text-sm font-semibold rounded-bl-2xl flex items-center gap-1">
                  <Star size={14} fill="currentColor" />
                  Most Popular
                </div>
              )}
              {pkg.badge && !pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1.5 text-sm font-semibold rounded-bl-2xl flex items-center gap-1">
                  <Sparkles size={14} />
                  {pkg.badge}
                </div>
              )}

              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name} Package</h3>
                <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`font-extrabold text-foreground ${pkg.price === "Custom" ? 'text-3xl lg:text-4xl' : 'text-4xl lg:text-5xl'}`}>
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground font-medium">{pkg.priceNote}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div 
                      key={feature} 
                      className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${300 + pkgIndex * 100 + index * 30}ms` }}
                    >
                      <div className={`w-5 h-5 rounded-full ${pkg.popular ? 'bg-accent/20' : 'bg-primary/10'} flex items-center justify-center flex-shrink-0`}>
                        <Check className={pkg.popular ? 'text-accent' : 'text-primary'} size={12} />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button 
                    variant={pkg.popular ? "hero" : "accent"} 
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
                      <MessageCircle className="mr-2" size={16} />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className={`max-w-2xl mx-auto mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone size={16} />
            <span>
              Not sure which package is right for you?{" "}
              <a href="#contact" className="text-accent hover:underline font-medium">
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
