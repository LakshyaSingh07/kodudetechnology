import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | KoDude Technology</title>
        <meta
          name="description"
          content="Explore our web development services - fast, responsive websites, UI/UX design, SEO optimization, and more for Indian businesses."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <ServicesSection />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Services;
