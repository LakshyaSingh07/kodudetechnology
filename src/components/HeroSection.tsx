import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'm interested in getting a free homepage sample for my business.");

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div 
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Premium Web Solutions for Indian Businesses
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Where Ideas Become{" "}
              <span className="text-gradient">Digital Reality.</span>
            </h1>

            <p 
              className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              We build modern, high-performing websites with clean UI/UX and SEO-ready 
              structure to help businesses grow online.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#contact" className="group">
                  Get Free Homepage Sample
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div 
              className="mt-12 pt-8 border-t border-border opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-sm text-muted-foreground mb-4">Trusted by real estate professionals across India</p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-xs text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">7 Days</p>
                  <p className="text-xs text-muted-foreground">Avg. Delivery</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">100%</p>
                  <p className="text-xs text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div 
            className="relative opacity-0 animate-fade-in-up hidden lg:block"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Browser Mockup */}
              <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
                <div className="bg-secondary px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(45_100%_50%)]/60" />
                    <div className="w-3 h-3 rounded-full bg-[hsl(142_70%_45%)]/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-background rounded-md px-3 py-1.5 text-xs text-muted-foreground text-center">
                      yourproperty.com
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 min-h-[400px] flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-4 animate-float">
                    <span className="text-3xl text-primary-foreground font-bold">🏠</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Premium Property Website</h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      Showcase your properties with a stunning, conversion-focused website
                    </p>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <div className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium">
                      View Properties
                    </div>
                    <div className="px-4 py-2 bg-card text-foreground rounded-lg text-sm font-medium border border-border">
                      Contact Agent
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-border animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">SEO Ready</p>
                    <p className="text-xs text-muted-foreground">Rank on Google</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(142_70%_45%)]/20 flex items-center justify-center">
                    <MessageCircle className="text-[hsl(142_70%_45%)]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">WhatsApp Ready</p>
                    <p className="text-xs text-muted-foreground">Get enquiries directly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
