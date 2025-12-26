import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi! I'm interested in getting a website for my business. Can we discuss?");

const ContactSection = () => {
  const { toast } = useToast();
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
    <section id="contact" className="py-20 lg:py-28 bg-navy-gradient text-navy-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Contact Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Let's Build Your Digital Presence
          </h2>
          <p className="text-lg text-navy-foreground/70">
            Ready to get started? Send us a message or connect directly via WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-navy-foreground/5 rounded-2xl p-6 lg:p-8 border border-navy-foreground/10">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-navy-foreground/80">
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
                  className="bg-navy-foreground/10 border-navy-foreground/20 text-navy-foreground placeholder:text-navy-foreground/40 focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-navy-foreground/80">
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
                  className="bg-navy-foreground/10 border-navy-foreground/20 text-navy-foreground placeholder:text-navy-foreground/40 focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-navy-foreground/80">
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
                  className="bg-navy-foreground/10 border-navy-foreground/20 text-navy-foreground placeholder:text-navy-foreground/40 focus:border-accent resize-none"
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2" size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <div className="bg-[hsl(142_70%_45%)]/10 rounded-2xl p-6 border border-[hsl(142_70%_45%)]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(142_70%_45%)]/20 flex items-center justify-center">
                    <MessageCircle className="text-[hsl(142_70%_45%)]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Prefer WhatsApp?</h4>
                    <p className="text-navy-foreground/70 text-sm">Get instant response</p>
                  </div>
                </div>
                <Button variant="whatsapp" size="lg" className="w-full" asChild>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2" size={18} />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Mail className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-navy-foreground/60">Email</p>
                    <a href="mailto:hello@kodude.in" className="font-medium hover:text-accent transition-colors">
                      hello@kodude.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Phone className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-navy-foreground/60">Phone</p>
                    <a href="tel:+919876543210" className="font-medium hover:text-accent transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <MapPin className="text-accent" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-navy-foreground/60">Location</p>
                    <p className="font-medium">India (Remote-First)</p>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="pt-6 border-t border-navy-foreground/10">
                <p className="text-navy-foreground/70 text-sm">
                  We typically respond within <span className="text-navy-foreground font-semibold">2-4 hours</span> during business hours.
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
