import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO, { generateBreadcrumbSchema, generateFAQSchema } from "@/components/SEO";

const faqs = [
  {
    question: "How much does a website cost?",
    answer: "Our packages start at ₹5,999 for a single-page website. Premium multi-page websites start at ₹11,999, and custom enterprise solutions are priced based on requirements.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are completed within 1-3 weeks depending on complexity. Simple single-page sites take about 1 week, while multi-page sites take 2-3 weeks.",
  },
  {
    question: "Do you offer a free sample?",
    answer: "Yes! We create a free homepage sample so you can see our work quality before committing. This helps you make an informed decision with zero risk.",
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern technologies including React, Next.js, Tailwind CSS, and other cutting-edge tools to build fast, responsive, and SEO-friendly websites.",
  },
  {
    question: "Do you provide website maintenance?",
    answer: "Yes, we offer ongoing maintenance packages that include security updates, content updates, performance optimization, and technical support.",
  },
  {
    question: "Can you help with SEO?",
    answer: "Absolutely! All our websites are built with SEO best practices. We also offer dedicated SEO services to help improve your search engine rankings.",
  },
  {
    question: "Do you integrate WhatsApp?",
    answer: "Yes, WhatsApp integration is included in all our packages. This allows your visitors to contact you instantly via WhatsApp with a single click.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, UPI payments, and all major payment methods. A 50% advance is required to start the project.",
  },
];

const FAQ = () => {
  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about our web development services, pricing, process, timeline, and support. Everything you need to know about working with KoDude Technology."
        canonical="/faq"
        keywords={[
          "web development FAQ",
          "website cost India",
          "website development questions",
          "KoDude FAQ",
          "web design questions",
        ]}
        structuredData={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/faq" },
          ]),
          generateFAQSchema(faqs),
        ]}
      />

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <FAQSection />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default FAQ;
