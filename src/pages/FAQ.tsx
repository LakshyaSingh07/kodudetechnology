import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | KoDude Technology</title>
        <meta
          name="description"
          content="Frequently asked questions about our web development services, pricing, process, and support for Indian businesses."
        />
      </Helmet>

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
