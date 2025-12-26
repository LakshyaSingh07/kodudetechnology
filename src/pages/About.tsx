import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | KoDude Technology</title>
        <meta
          name="description"
          content="Learn about KoDude Technology - we specialize in creating professional, conversion-focused websites for real estate professionals and businesses across India."
        />
      </Helmet>

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
