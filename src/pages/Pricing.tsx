import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Starter Package",
        description: "Single page professional website with responsive design",
        offers: {
          "@type": "Offer",
          price: "5999",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Professional Package",
        description: "Multi-page website with contact forms and SEO optimization",
        offers: {
          "@type": "Offer",
          price: "11999",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Business Package",
        description: "Full-featured website with advanced functionality",
        offers: {
          "@type": "Offer",
          price: "19999",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    },
  ],
};

const Pricing = () => {
  return (
    <>
      <SEO
        title="Pricing"
        description="Affordable web development packages starting at ₹5,999. Choose from Starter, Professional, and Business packages designed for Indian businesses and real estate agents."
        canonical="/pricing"
        keywords={[
          "website pricing India",
          "affordable web development",
          "website packages",
          "cheap website design",
          "web development cost",
          "real estate website price",
        ]}
        structuredData={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Pricing", url: "/pricing" },
          ]),
          pricingSchema,
        ]}
      />

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
