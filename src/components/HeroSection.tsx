import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useMouseParallax } from "@/hooks/useParallax";

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'm interested in getting a free homepage sample for my business.");

const HeroSection = () => {
  const mousePosition = useMouseParallax(0.02);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        {/* Gold glow accents with parallax */}
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-glow parallax-element" 
          style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-champagne/5 rounded-full blur-[120px] animate-glow parallax-element" 
          style={{ 
            animationDelay: "1.5s",
            transform: `translate(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5}px)` 
          }} 
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div 
              className="inline-flex items-center gap-3 border border-primary/30 px-5 py-2 rounded-full text-sm font-light tracking-widest mb-8 opacity-0 animate-fade-in text-primary uppercase"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-glow" />
              Premium Web Solutions
            </div>

            {/* Text reveal animation for heading */}
            <div className="overflow-hidden mb-8">
              <h1 
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-foreground leading-[1.1] opacity-0 animate-reveal-up"
                style={{ animationDelay: "0.2s" }}
              >
                Where Ideas Become
              </h1>
            </div>
            <div className="overflow-hidden mb-8">
              <h1 
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] opacity-0 animate-reveal-up"
                style={{ animationDelay: "0.35s" }}
              >
                <span className="gold-shimmer italic">Digital Reality.</span>
              </h1>
            </div>

            <p 
              className="text-lg lg:text-xl text-muted-foreground font-light max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed opacity-0 animate-fade-blur"
              style={{ animationDelay: "0.5s" }}
            >
              We craft modern, high-performing websites with refined aesthetics 
              and strategic architecture to elevate your business online.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in"
              style={{ animationDelay: "0.65s" }}
            >
              <Button variant="hero" size="xl" asChild className="hover-lift">
                <a href="#contact" className="group">
                  Get Free Sample
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild className="hover-lift">
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" size={18} />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Trust Indicators with stagger animation */}
            <div 
              className="mt-16 pt-10 border-t border-border/50 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              <p className="text-xs text-muted-foreground mb-6 uppercase tracking-widest">Trusted by professionals across India</p>
              <div className="flex flex-wrap gap-10 justify-center lg:justify-start items-center stagger-children">
                <div className="text-center">
                  <p className="text-3xl font-display gold-shimmer">50+</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Projects</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-display gold-shimmer">7 Days</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Delivery</p>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-display gold-shimmer">100%</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual with parallax */}
          <div 
            className="relative opacity-0 animate-fade-blur hidden lg:block"
            style={{ 
              animationDelay: "0.4s",
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` 
            }}
          >
            <div className="relative">
              {/* Browser Mockup */}
              <div className="card-luxury rounded-lg overflow-hidden gold-border hover-lift">
                <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-champagne/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-background/50 rounded px-3 py-1.5 text-xs text-muted-foreground text-center font-light tracking-wide">
                      yourproperty.com
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-gradient-shine min-h-[400px] flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded bg-gradient-gold flex items-center justify-center mb-6 shadow-glow animate-float">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-display text-foreground mb-3">Premium Property Website</h3>
                    <p className="text-muted-foreground text-sm font-light max-w-xs leading-relaxed">
                      Showcase your properties with elegant, conversion-focused design
                    </p>
                  </div>
                  <div className="mt-8 flex gap-3">
                    <div className="px-5 py-2.5 bg-gradient-gold text-primary-foreground rounded text-xs font-medium uppercase tracking-wider">
                      View Properties
                    </div>
                    <div className="px-5 py-2.5 bg-transparent text-foreground rounded text-xs font-medium border border-border uppercase tracking-wider">
                      Contact
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements with offset parallax */}
              <div 
                className="absolute -top-4 -right-4 card-luxury p-4 rounded-lg shadow-xl animate-float parallax-element" 
                style={{ 
                  animationDelay: "0.5s",
                  transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` 
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-gradient-gold flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">SEO Ready</p>
                    <p className="text-xs text-muted-foreground">Rank on Google</p>
                  </div>
                </div>
              </div>

              <div 
                className="absolute -bottom-4 -left-4 card-luxury p-4 rounded-lg shadow-xl animate-float parallax-element" 
                style={{ 
                  animationDelay: "1s",
                  transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)` 
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[hsl(142_70%_45%)]/20 flex items-center justify-center">
                    <MessageCircle className="text-[hsl(142_70%_45%)]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">WhatsApp Ready</p>
                    <p className="text-xs text-muted-foreground">Direct enquiries</p>
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