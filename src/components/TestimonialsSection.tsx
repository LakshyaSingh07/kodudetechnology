import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Real Estate Developer",
    location: "Mumbai",
    content: "Professional, clean work and smooth communication. KoDude delivered exactly what we needed for our property listings. The website immediately improved our online presence.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Real Estate Agent",
    location: "Delhi NCR",
    content: "The website instantly improved our online presence. Clients now trust us more before even meeting us. The WhatsApp integration has been a game-changer for enquiries.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Builder",
    location: "Pune",
    content: "Affordable and high quality — exactly what small builders need. The team understood our requirements perfectly and delivered on time. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      className="py-20 lg:py-28 bg-background"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from real estate professionals across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-lg relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent/20">
                <Quote size={32} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
