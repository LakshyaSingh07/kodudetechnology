import { Target, TrendingUp, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
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
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <Target className="text-accent" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Focused Approach</h3>
            <p className="text-muted-foreground">
              We specialize in real estate and business websites, understanding exactly what 
              your clients need to see.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <TrendingUp className="text-accent" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Growth Driven</h3>
            <p className="text-muted-foreground">
              Every design decision is made with lead generation in mind — from layout to 
              call-to-action placement.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <Users className="text-accent" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Client-First</h3>
            <p className="text-muted-foreground">
              Transparent process, fair pricing, and dedicated support. Your success is our 
              priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
