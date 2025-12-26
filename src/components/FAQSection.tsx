import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "How does the free homepage sample work?",
    answer: "We create a professional homepage design mockup for your business completely free — no payment required upfront. You review the design, suggest changes, and only move forward if you're 100% satisfied. There's absolutely no obligation.",
  },
  {
    question: "What's included in the ₹5,999 Starter Package?",
    answer: "The Starter Package includes a 1-3 page static website, property showcase sections, WhatsApp enquiry integration, basic SEO setup, domain + hosting for one year, SSL certificate, mobile responsive design, and 7 days of post-launch support.",
  },
  {
    question: "How long does it take to build my website?",
    answer: "Most websites in our Starter Package are completed within 7 working days after approval and advance payment. Larger or custom projects may take 2-3 weeks depending on complexity and requirements.",
  },
  {
    question: "Do I need to pay anything upfront?",
    answer: "No payment for the free sample. Once you approve the design and decide to proceed, we require a 50% advance to start full development. The remaining 50% is due before final launch.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices. Since most of your clients browse on phones, we ensure your site looks and works perfectly on all screen sizes.",
  },
  {
    question: "Is domain and hosting included?",
    answer: "Yes! The Starter Package includes domain registration and hosting for one year. After the first year, you'll need to renew these services, typically around ₹1,500-2,000 per year depending on your domain.",
  },
  {
    question: "Can I update my website content myself?",
    answer: "Static websites require technical knowledge to update. For the Starter Package, we offer minor content updates for 7 days post-launch. For ongoing updates, we offer affordable maintenance packages or can build a CMS-enabled site.",
  },
  {
    question: "Do you provide support after the website is live?",
    answer: "Yes! The Starter Package includes 7 days of post-launch support for bug fixes and minor adjustments. For ongoing support and maintenance, we offer monthly packages starting at ₹999/month.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="faq" 
      className="py-20 lg:py-28 bg-card"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-accent/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className={`max-w-3xl mx-auto mt-12 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact" className="text-accent font-medium hover:underline">
              Get in touch
            </a>{" "}
            — we're happy to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
