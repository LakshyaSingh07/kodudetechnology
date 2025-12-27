import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about KoDude Technology - we specialize in creating professional, conversion-focused websites for real estate professionals and businesses across India. Our team delivers premium quality at affordable prices."
        canonical="/about"
        keywords={[
          "about KoDude",
          "web development company India",
          "website agency",
          "real estate web developers",
          "professional web design team",
        ]}
        structuredData={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ])}
      />

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <AboutSection />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default About;
