import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const Portfolio = () => {
  return (
    <>
      <SEO
        title="Our Portfolio"
        description="View our portfolio of successful website projects for real estate agents, builders, and businesses across India. See real results from real clients."
        canonical="/portfolio"
        keywords={[
          "web development portfolio",
          "website examples",
          "real estate website examples",
          "business website portfolio",
          "case studies",
          "client projects",
        ]}
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ])}
      />

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
