import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Our Portfolio | KoDude Technology</title>
        <meta
          name="description"
          content="View our portfolio of successful website projects for real estate agents, builders, and businesses across India."
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <PortfolioSection />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Portfolio;
