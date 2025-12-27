import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact KoDude Technology",
  description: "Get in touch with KoDude Technology for your web development needs",
  mainEntity: {
    "@type": "Organization",
    name: "KoDude Technology",
    telephone: "+1-234-567-890",
    email: "hello@kodude.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
};

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with KoDude Technology. Send us a message or connect via WhatsApp for a free consultation about your website project. We respond within 24 hours."
        canonical="/contact"
        keywords={[
          "contact KoDude",
          "web development inquiry",
          "website quote",
          "free consultation",
          "hire web developer India",
        ]}
        structuredData={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
          contactSchema,
        ]}
      />

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
