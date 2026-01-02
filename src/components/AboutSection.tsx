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
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className={`container mx-auto px-4 lg:px-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className={`text-primary font-light text-sm uppercase tracking-[0.3em] mb-6 block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.1s' }}>
            About Us
          </span>
          <div className={`luxury-divider mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{ transitionDelay: '0.2s' }} />
          
          {/* Text reveal effect */}
          <div className="overflow-hidden mb-4">
            <h2 className={`font-display text-3xl lg:text-5xl font-normal text-foreground leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`} style={{ transitionDelay: '0.3s' }}>
              Building Digital Trust
            </h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h2 className={`font-display text-3xl lg:text-5xl font-normal leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`} style={{ transitionDelay: '0.4s' }}>
              <span className="gold-shimmer italic">for Your Business</span>
            </h2>
          </div>
          
          <p className={`text-lg text-muted-foreground font-light leading-relaxed transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.5s' }}>
            KoDude Technology specializes in creating professional, conversion-focused websites for businesses across India. We understand that your website is often the first impression clients have of your brand — and we make it count.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            { icon: Target, title: "Focused Approach", description: "We design websites with a clear understanding of what your clients need to see, trust, and act on." },
            { icon: TrendingUp, title: "Growth Driven", description: "Every design decision is made with lead generation in mind — from layout to call-to-action placement." },
            { icon: Users, title: "Client-First", description: "Transparent process, fair pricing, and dedicated support. Your success is our priority." },
          ].map((item, index) => (
            <div 
              key={item.title} 
              className={`text-center group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${0.6 + index * 0.15}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-8 rounded border border-primary/30 flex items-center justify-center group-hover:border-primary/60 group-hover:shadow-glow transition-all duration-500 hover-lift">
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