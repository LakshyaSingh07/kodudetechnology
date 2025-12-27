import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import StatsSection from "@/components/StatsSection";
import WhyUsSection from "@/components/WhyUsSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatWidget from "@/components/ChatWidget";
import SEO, { generateLocalBusinessSchema, generateFAQSchema } from "@/components/SEO";

const homeFAQs = [
  { question: "How much does a website cost?", answer: "Our packages start at ₹5,999 for a single-page website. Premium multi-page websites start at ₹11,999." },
  { question: "How long does it take to build a website?", answer: "Most websites are completed within 1-3 weeks depending on complexity and requirements." },
  { question: "Do you offer a free sample?", answer: "Yes! We create a free homepage sample so you can see our work before committing." },
];

const Index = () => {
  return (
    <>
      <SEO
        title="KoDude Technology | Premium Web Development for Real Estate & Businesses"
        description="KoDude Technology builds modern, high-performing websites for Indian real estate agents and businesses. Get a free homepage sample. Starting at ₹5,999."
        canonical="/"
        keywords={[
          "web development India",
          "real estate website",
          "property website design",
          "affordable web design",
          "business website India",
          "website for real estate agents",
          "WhatsApp integration website",
        ]}
        structuredData={[
          generateLocalBusinessSchema(),
          generateFAQSchema(homeFAQs),
        ]}
      />

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <StatsSection />
        <WhyUsSection />
        <PricingSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <FloatingWhatsApp />
        <ChatWidget />
      </main>
    </>
  );
};

export default Index;
