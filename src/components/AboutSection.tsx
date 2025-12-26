import { Target, TrendingUp, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      className="py-20 lg:py-28 bg-card"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Building Digital Trust for Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            KoDude Technology specializes in creating professional, conversion-focused websites 
            for real estate professionals and businesses across India. We understand that your 
            website is often the first impression clients have of your business — and we make it count.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Focused Approach", description: "We specialize in real estate and business websites, understanding exactly what your clients need to see." },
            { icon: TrendingUp, title: "Growth Driven", description: "Every design decision is made with lead generation in mind — from layout to call-to-action placement." },
            { icon: Users, title: "Client-First", description: "Transparent process, fair pricing, and dedicated support. Your success is our priority." },
          ].map((item, index) => (
            <div 
              key={item.title} 
              className={`text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <item.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
