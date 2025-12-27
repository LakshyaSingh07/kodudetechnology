import { ExternalLink, Building2, Home, Store, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "sharma-properties",
    title: "Sharma Properties",
    category: "Real Estate Agent",
    description: "A modern property listing website with WhatsApp integration that increased client enquiries by 40%.",
    icon: Home,
    gradient: "from-primary/20 via-accent/10 to-primary/5",
    features: ["Property Listings", "WhatsApp CTA", "Contact Form"],
  },
  {
    slug: "horizon-builders",
    title: "Horizon Builders",
    category: "Construction Company",
    description: "Premium corporate website showcasing ongoing projects and company portfolio with elegant design.",
    icon: Building2,
    gradient: "from-accent/20 via-primary/10 to-accent/5",
    features: ["Project Gallery", "About Section", "Lead Capture"],
  },
  {
    slug: "metro-realty",
    title: "Metro Realty",
    category: "Property Developer",
    description: "Multi-property showcase with individual project pages and integrated enquiry system.",
    icon: Store,
    gradient: "from-primary/15 via-accent/15 to-primary/10",
    features: ["Multiple Pages", "SEO Optimized", "Mobile First"],
  },
];

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="portfolio" 
      className="py-20 lg:py-28 bg-background"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Projects We've Delivered
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results for real businesses. Here's a glimpse of our recent work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to={`/case-study/${project.slug}`}
              className={`group block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2">
                {/* Project Preview */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Browser Mockup */}
                  <div className="absolute inset-4 bg-card rounded-lg shadow-lg overflow-hidden border border-border/50 group-hover:scale-[1.02] transition-transform duration-500">
                    {/* Browser Header */}
                    <div className="h-6 bg-secondary flex items-center px-3 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-destructive/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <div className="w-2 h-2 rounded-full bg-green-500/60" />
                      <div className="flex-1 mx-3">
                        <div className="h-3 bg-muted rounded-full max-w-[120px]" />
                      </div>
                    </div>
                    {/* Content Preview */}
                    <div className="p-3 space-y-2">
                      <div className="h-8 bg-primary/10 rounded" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-muted rounded" />
                        <div className="h-12 bg-muted rounded" />
                        <div className="h-12 bg-muted rounded" />
                      </div>
                      <div className="h-3 bg-muted rounded w-3/4" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                    </div>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/90 flex items-center justify-center shadow-md group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <project.icon className="text-accent group-hover:text-primary-foreground transition-colors" size={20} />
                  </div>

                  {/* View Case Study Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                    <span className="flex items-center gap-2 text-sm font-medium text-primary">
                      View Case Study
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-muted-foreground mb-4">
            Want to see your business featured here?
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="#contact">
              Start Your Project
              <ExternalLink className="ml-2" size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
