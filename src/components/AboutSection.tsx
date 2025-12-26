import { Target, TrendingUp, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      className="py-24 lg:py-32 bg-card relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className={`container mx-auto px-4 lg:px-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-primary font-light text-sm uppercase tracking-[0.3em] mb-6 block">
            About Us
          </span>
          <div className="luxury-divider mb-8" />
          <h2 className="font-display text-3xl lg:text-5xl font-normal text-foreground mb-8 leading-tight">
            Building Digital Trust <br className="hidden lg:block" />
            <span className="text-gradient italic">for Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            KoDude Technology specializes in creating professional, conversion-focused websites 
            for real estate professionals and businesses across India. We understand that your 
            website is often the first impression clients have of your business — and we make it count.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            { icon: Target, title: "Focused Approach", description: "We specialize in real estate and business websites, understanding exactly what your clients need to see." },
            { icon: TrendingUp, title: "Growth Driven", description: "Every design decision is made with lead generation in mind — from layout to call-to-action placement." },
            { icon: Users, title: "Client-First", description: "Transparent process, fair pricing, and dedicated support. Your success is our priority." },
          ].map((item, index) => (
            <div 
              key={item.title} 
              className={`text-center group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-8 rounded border border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:shadow-glow transition-all duration-500">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;