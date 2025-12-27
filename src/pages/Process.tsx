import Navbar from "@/components/Navbar";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get a Website from KoDude Technology",
  description: "Our simple 5-step process to get your professional website",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Request Free Sample",
      text: "Fill out our contact form or WhatsApp us with your requirements. We will create a free homepage sample for you.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Review & Approve",
      text: "Review your free sample. If you like it, approve the design and we will proceed with the full website.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Make Payment",
      text: "Pay 50% advance to start the project. The remaining 50% is due upon completion.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Development",
      text: "Our team builds your complete website with all requested features and functionality.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Launch",
      text: "After your approval, we launch your website and provide 30 days of free support.",
    },
  ],
};

const Process = () => {
  return (
    <>
      <SEO
        title="Our Process"
        description="Learn about our simple 5-step process - from free sample to launch. Transparent, efficient, and built for your convenience. Get your website live in just 1-3 weeks."
        canonical="/process"
        keywords={[
          "web development process",
          "how we work",
          "website development steps",
          "project timeline",
          "web design process",
        ]}
        structuredData={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Process", url: "/process" },
          ]),
          howToSchema,
        ]}
      />

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
