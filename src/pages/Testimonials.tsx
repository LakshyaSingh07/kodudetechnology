import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials | KoDude Technology</title>
        <meta
          name="description"
          content="Read what our clients say about KoDude Technology - real feedback from real estate professionals across India."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <TestimonialsSection />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Testimonials;
