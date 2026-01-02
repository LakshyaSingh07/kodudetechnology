import { Button } from "@/components/ui/button";
import { Check, Star, MessageCircle, Sparkles, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WHATSAPP_NUMBER = "918077533278";

const packages = [
  {
    name: "Starter",
    description:
      "Ideal for individuals, startups & small businesses getting online",
    price: "₹5,999",
    priceNote: "one-time",
    popular: true,
    features: [
      "1-3 page professionally designed website",
      "Clean & modern UI tailored to your brand",
      "Call-to-action & enquiry-focused layout",
      "WhatsApp integration for instant leads",
      "Basic on-page SEO setup",
      "Domain + hosting included (1 year)",
      "Mobile-first & fully responsive design",
      "SSL security certificate included",
      "7 days post-launch support",
    ],
    // cta: "Get Started",
    whatsappMessage:
      "Hi! I'm interested in the Starter Website Package (₹5,999). Can we discuss the details?",
  },
  {
    name: "Premium",
    description:
      "For growing businesses that need flexibility, scalability & performance",
    price: "₹12,999",
    priceNote: "one-time",
    popular: false,
    badge: "Best Value",
    features: [
      "5–8 page dynamic website",
      "Custom UI/UX aligned with business goals",
      "Dynamic content sections",
      "Advanced enquiry & contact forms",
      "Email notifications for leads",
      "Advanced SEO optimization",
      "Domain + hosting included (1 year)",
      "Google Analytics integration",
      "Social media integration",
      "Performance & speed optimization",
      "30 days post-launch support",
      "Website handover & basic admin guidance",
    ],
    // cta: "Choose Premium",
    whatsappMessage:
      "Hi! I'm interested in the Premium Website Package (₹12,999). Can we discuss further?",
  },
  {
    name: "Custom",
    description: "Tailor-made digital solutions for unique business needs",
    price: "Custom",
    priceNote: "get a quote",
    popular: false,
    features: [
      "Custom-designed website or web application",
      "Unlimited pages & flexible architecture",
      "Advanced functionality & integrations",
      "CMS or admin panel (if required)",
      "E-commerce or booking systems",
      "Third-party & API integrations",
      "Performance & security optimization",
      "Priority support & dedicated assistance",
      "Ongoing maintenance & upgrade options",
    ],
    // cta: "Contact Us",
    whatsappMessage:
      "Hi! I'm interested in a Custom Website Solution for my business. Can we discuss my requirements?",
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
        <div
          className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className={`text-primary font-light text-sm uppercase tracking-[0.3em] mb-6 block transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            Pricing
          </span>
          <div
            className={`luxury-divider mb-8 transition-all duration-700 origin-center ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          />

          {/* Text reveal */}
          <div className="overflow-hidden mb-4">
            <h2
              className={`font-display text-3xl lg:text-5xl font-normal text-foreground leading-tight transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              Simple, Transparent
            </h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h2
              className={`font-display text-3xl lg:text-5xl font-normal leading-tight transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <span className="gold-shimmer italic">Pricing</span>
            </h2>
          </div>

          <p
            className={`text-lg text-muted-foreground font-light leading-relaxed transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            Choose the package that fits your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, pkgIndex) => (
            <div
              key={pkg.name}
              className={`relative card-luxury rounded-lg overflow-hidden transition-all duration-700 flex flex-col hover-lift ${
                pkg.popular ? "gold-border shadow-glow" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.6 + pkgIndex * 0.15}s` }}
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
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {pkg.name} Package
                </h3>
                <p className="text-muted-foreground text-sm font-light mb-8">
                  {pkg.description}
                </p>

                <div className="flex items-baseline gap-2 mb-10">
                  <span
                    className={`font-display text-gradient ${
                      pkg.price === "Custom"
                        ? "text-3xl lg:text-4xl"
                        : "text-4xl lg:text-5xl"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground font-light text-sm">
                    {pkg.priceNote}
                  </span>
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {pkg.features.map((feature, index) => (
                    <div
                      key={feature}
                      className={`flex items-center gap-3 transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                      style={{
                        transitionDelay: `${
                          300 + pkgIndex * 100 + index * 30
                        }ms`,
                      }}
                    >
                      <div className="w-5 h-5 rounded border border-primary/50 flex items-center justify-center flex-shrink-0">
                        <Check className="text-primary" size={10} />
                      </div>
                      <span className="text-foreground text-sm font-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mt-auto">
                  {/* <Button
                    variant={pkg.popular ? "default" : "outline"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a href="#contact">{pkg.cta}</a>
                  </Button> */}
                  <Button
                    variant="default"
                    size="default"
                    className="w-full"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        pkg.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2" size={14} />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div
          className={`max-w-2xl mx-auto mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
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
