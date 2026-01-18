import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KoDude Technology",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "120",
    reviewCount: "85",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Tanish",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "KoDude Technology helped us take our RC business online with a fast, reliable, and easy-to-manage ecommerce website. The product presentation, performance, and overall user experience have significantly improved our sales and customer trust.",
    },

    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Lakshya Singh",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "KoDude Technology built a portfolio website that truly reflects my skills and personal brand. The design, performance, and smooth user experience have helped me attract better clients and present my work more professionally.",
    },

    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Priya Desai",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "The website perfectly showcases all our projects while maintaining our brand identity. The lead management system has streamlined our sales process.",
    },
  ],
};

const Testimonials = () => {
  return (
    <>
      <SEO
        title="Client Testimonials"
        description="Read what our clients say about KoDude Technology - real feedback from real estate professionals and businesses across India. 4.9 star rating from 120+ clients."
        canonical="/testimonials"
        keywords={[
          "KoDude reviews",
          "client testimonials",
          "web development reviews",
          "customer feedback",
          "real estate website reviews",
          "kodude client testimonials",
          "kodude customer reviews",
        ]}
        structuredData={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Testimonials", url: "/testimonials" },
          ]),
          reviewSchema,
        ]}
      />

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-20">
          <TestimonialsSection />
        </div>
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
};

export default Testimonials;
