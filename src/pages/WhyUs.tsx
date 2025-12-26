import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const WhyUs = () => {
  return (
    <>
      <Helmet>
        <title>Why Choose Us | KoDude Technology</title>
        <meta
          name="description"
          content="Discover why KoDude Technology is the right choice - premium quality, affordable pricing, real estate focused approach, and transparent process."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <WhyUsSection />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default WhyUs;
