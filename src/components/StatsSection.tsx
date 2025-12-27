import { useEffect, useState, useRef } from "react";
import { Briefcase, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful deliveries",
  },
  {
    icon: Users,
    value: 120,
    suffix: "+",
    label: "Happy Clients",
    description: "Across industries",
  },
  {
    icon: Award,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    description: "In web development",
  },
  {
    icon: Clock,
    value: 99,
    suffix: "%",
    label: "On-Time Delivery",
    description: "Reliable & punctual",
  },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ stat, index, isVisible }: { 
  stat: typeof stats[0]; 
  index: number; 
  isVisible: boolean;
}) => {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div 
      className={`relative group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-500 hover:shadow-xl overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon */}
        <div className="relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <stat.icon className="w-8 h-8 text-primary" />
        </div>

        {/* Counter */}
        <div className="relative font-display text-5xl md:text-6xl text-foreground mb-2">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {count}
          </span>
          <span className="text-primary">{stat.suffix}</span>
        </div>

        {/* Label */}
        <h3 className="relative font-display text-lg text-foreground mb-1">
          {stat.label}
        </h3>
        <p className="relative text-sm text-muted-foreground">
          {stat.description}
        </p>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-28 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Our Impact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Numbers That Speak <span className="text-primary">Success</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our track record of delivering exceptional results for clients across industries.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={stat.label} 
              stat={stat} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
