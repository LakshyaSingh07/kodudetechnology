import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>KoDude Technology | Premium Web Development for Real Estate & Businesses</title>
        <meta
          name="description"
          content="KoDude Technology builds modern, high-performing websites for Indian real estate agents and businesses. Get a free homepage sample. Starting at ₹5,999."
        />
        <meta
          name="keywords"
          content="web development India, real estate website, property website design, affordable web design, business website India, KoDude Technology"
        />
        <meta property="og:title" content="KoDude Technology | Where Ideas Become Digital Reality" />
        <meta
          property="og:description"
          content="Premium web development for real estate agents and businesses in India. Modern designs, SEO-ready, WhatsApp integration. Starting at ₹5,999."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KoDude Technology | Premium Web Development" />
        <meta
          name="twitter:description"
          content="Build your business's digital presence with KoDude Technology. Modern websites designed for lead generation."
        />
        <link rel="canonical" href="https://kodude.in" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <PricingSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
