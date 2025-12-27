import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO, { generateBreadcrumbSchema, generateServiceSchema } from "@/components/SEO";

const services = [
  { name: "Website Design & Development", description: "Custom, responsive websites built with modern technologies for optimal performance and user experience." },
  { name: "E-commerce Solutions", description: "Full-featured online stores with secure payment integration and inventory management." },
  { name: "SEO Optimization", description: "Search engine optimization to improve your visibility and attract more organic traffic." },
  { name: "WhatsApp Integration", description: "Seamless WhatsApp business integration for instant customer communication." },
  { name: "UI/UX Design", description: "User-centered design that creates intuitive and engaging digital experiences." },
  { name: "Website Maintenance", description: "Ongoing support and updates to keep your website secure and performing optimally." },
];

const Services = () => {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore our comprehensive web development services - responsive website design, e-commerce solutions, SEO optimization, WhatsApp integration, and more for Indian businesses."
        canonical="/services"
        keywords={[
          "web development services",
          "website design services",
          "SEO services India",
          "e-commerce development",
          "WhatsApp integration",
          "UI UX design",
          "website maintenance",
        ]}
        structuredData={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
          ]),
          generateServiceSchema(services),
        ]}
      />

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <ServicesSection />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Services;
