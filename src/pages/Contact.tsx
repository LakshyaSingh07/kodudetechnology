import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | KoDude Technology</title>
        <meta
          name="description"
          content="Get in touch with KoDude Technology. Send us a message or connect via WhatsApp for a free consultation about your website project."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <ContactSection />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Contact;
