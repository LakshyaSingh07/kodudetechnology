import { Target, TrendingUp, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      className="py-20 lg:py-28 bg-card relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vibrant-purple/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-vibrant-cyan/5 rounded-full blur-[80px]" />
      
      <div className={`container mx-auto px-4 lg:px-8 relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
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
            { icon: Target, title: "Focused Approach", description: "We specialize in real estate and business websites, understanding exactly what your clients need to see.", color: "purple" },
            { icon: TrendingUp, title: "Growth Driven", description: "Every design decision is made with lead generation in mind — from layout to call-to-action placement.", color: "coral" },
            { icon: Users, title: "Client-First", description: "Transparent process, fair pricing, and dedicated support. Your success is our priority.", color: "cyan" },
          ].map((item, index) => (
            <div 
              key={item.title} 
              className={`text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                item.color === 'purple' ? 'bg-vibrant-purple/10 group-hover:bg-vibrant-purple/20' :
                item.color === 'coral' ? 'bg-vibrant-coral/10 group-hover:bg-vibrant-coral/20' :
                'bg-vibrant-cyan/10 group-hover:bg-vibrant-cyan/20'
              }`}>
                <item.icon className={`${
                  item.color === 'purple' ? 'text-vibrant-purple' :
                  item.color === 'coral' ? 'text-vibrant-coral' :
                  'text-vibrant-cyan'
                }`} size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
