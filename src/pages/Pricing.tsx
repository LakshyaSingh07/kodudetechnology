import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | KoDude Technology</title>
        <meta
          name="description"
          content="Affordable web development packages starting at ₹5,999. Starter, Premium, and Custom packages available for Indian businesses."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <PricingSection />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Pricing;
