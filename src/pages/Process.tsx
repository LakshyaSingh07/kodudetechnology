import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Process = () => {
  return (
    <>
      <Helmet>
        <title>Our Process | KoDude Technology</title>
        <meta
          name="description"
          content="Learn about our simple 5-step process - from free sample to launch. Transparent, efficient, and built for your convenience."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <ProcessSection />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Process;
