import Navbar from "@/components/Navbar";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const WhyUs = () => {
  return (
    <>
      <SEO
        title="Why Choose Us"
        description="Discover why KoDude Technology is the right choice for your website - premium quality at affordable prices, real estate focused approach, transparent process, and dedicated support."
        canonical="/why-us"
        keywords={[
          "why choose KoDude",
          "best web developer India",
          "affordable quality websites",
          "real estate web specialist",
          "trusted web agency",
        ]}
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Why Choose Us", url: "/why-us" },
        ])}
      />

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
