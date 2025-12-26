import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'm interested in getting a website for my business. Can we discuss?");

const ContactSection = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section 
      id="contact" 
      className="py-24 lg:py-32 bg-navy relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary font-light text-sm uppercase tracking-[0.3em] mb-6 block">
            Contact Us
          </span>
          <div className="luxury-divider mb-8" />
          <h2 className="font-display text-3xl lg:text-5xl font-normal text-foreground mb-8 leading-tight">
            Let's Build Your <br className="hidden lg:block" />
            <span className="text-gradient italic">Digital Presence</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Ready to get started? Send us a message or connect directly via WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className={`card-luxury rounded-lg p-8 lg:p-10 transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="font-display text-xl text-foreground mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light mb-2 text-muted-foreground uppercase tracking-wider">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-light mb-2 text-muted-foreground uppercase tracking-wider">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary rounded"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-light mb-2 text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none rounded"
                />
              </div>
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2" size={16} />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`flex flex-col justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="card-luxury rounded-lg p-6 border-[hsl(142_70%_45%)]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded border border-[hsl(142_70%_45%)]/30 flex items-center justify-center">
                    <MessageCircle className="text-[hsl(142_70%_45%)]" size={22} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-foreground">Prefer WhatsApp?</h4>
                    <p className="text-muted-foreground text-sm font-light">Get instant response</p>
                  </div>
                </div>
                <Button variant="whatsapp" size="lg" className="w-full" asChild>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" size={16} />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Contact Details */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded border border-primary/30 flex items-center justify-center">
                    <Mail className="text-primary" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <a href="mailto:hello@kodude.in" className="font-light text-foreground hover:text-primary transition-colors">
                      hello@kodude.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded border border-primary/30 flex items-center justify-center">
                    <Phone className="text-primary" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                    <a href="tel:+919876543210" className="font-light text-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded border border-primary/30 flex items-center justify-center">
                    <MapPin className="text-primary" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="font-light text-foreground">India (Remote-First)</p>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="pt-6 border-t border-border/50">
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  We typically respond within <span className="text-primary font-medium">2-4 hours</span> during business hours.
                  Start with a free consultation — no commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;