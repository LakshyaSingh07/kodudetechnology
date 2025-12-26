import { Button } from "@/components/ui/button";
import { Check, Star, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'm interested in the Starter Package at ₹5,999. Can we discuss?");

const starterFeatures = [
  "1–3 page static website",
  "Property showcase sections",
  "WhatsApp enquiry integration",
  "Basic SEO setup",
  "Domain + hosting included",
  "7 days post-launch support",
  "Mobile responsive design",
  "SSL certificate included",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Start with our popular Starter Package — everything you need to get online.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Starter Package Card */}
          <div className="relative bg-card rounded-3xl border-2 border-accent shadow-xl overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1.5 text-sm font-semibold rounded-bl-2xl flex items-center gap-1">
              <Star size={14} fill="currentColor" />
              Most Popular
            </div>

            <div className="p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-2">Starter Package</h3>
              <p className="text-muted-foreground mb-6">Perfect for real estate agents & small businesses</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl lg:text-6xl font-extrabold text-foreground">₹5,999</span>
                <span className="text-muted-foreground font-medium">one-time</span>
              </div>

              <div className="space-y-4 mb-8">
                {starterFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="text-accent" size={12} />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <Button variant="hero" size="xl" className="w-full" asChild>
                  <a href="#contact">Get Started Now</a>
                </Button>
                <Button variant="whatsapp" size="lg" className="w-full" asChild>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" size={18} />
                    Discuss on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Custom Package Note */}
          <div className="mt-8 text-center p-6 bg-secondary rounded-2xl">
            <p className="text-foreground font-medium mb-2">Need something more?</p>
            <p className="text-muted-foreground text-sm">
              Custom packages available for larger projects with advanced features, 
              e-commerce, or ongoing maintenance needs.{" "}
              <a href="#contact" className="text-accent hover:underline font-medium">
                Contact us
              </a>{" "}
              to discuss.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
