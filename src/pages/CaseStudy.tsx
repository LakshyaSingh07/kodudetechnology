import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Clock,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const caseStudies: Record<
  string,
  {
    title: string;
    client: string;
    category: string;
    duration: string;
    overview: string;
    challenge: string;
    solution: string;
    results: { label: string; value: string; icon: React.ElementType }[];
    features: string[];
    testimonial: { quote: string; author: string; role: string };
    gradient: string;
  }
> = {
  "tanish-rc": {
    title: "TanishRC.in",
    client: "Tanish RC",
    category: "Ecommerce Marketplace",
    duration: "4 weeks",
    gradient: "from-primary/30 via-accent/20 to-primary/10",
    overview:
      "TanishRC.in is a niche ecommerce marketplace dedicated to RC planes, RC parts, and accessories for hobbyists and professionals. The client wanted a scalable online store that could handle product variety, secure payments, and deliver a smooth shopping experience while building trust within the RC community.",
    challenge:
      "The business previously relied on offline sales and social media inquiries, which limited reach and scalability. They needed a professional ecommerce platform to manage inventory, accept online payments, showcase technical products clearly, and establish credibility in a competitive niche market.",
    solution:
      "We built a full-featured WordPress-based ecommerce website using WooCommerce, designed for performance, clarity, and ease of use. The platform focuses on product discovery, detailed specifications, and a seamless checkout flow, ensuring both beginners and experienced RC enthusiasts can shop with confidence.",
    results: [
      { label: "Increase in Online Orders", value: "70%+", icon: TrendingUp },
      { label: "Monthly Visitors", value: "6,000+", icon: Users },
      { label: "Average Session Duration", value: "3.8min", icon: Clock },
      { label: "Repeat Customers", value: "40%+", icon: Target },
    ],
    features: [
      "WooCommerce-powered ecommerce system",
      "Category-based product organization",
      "Detailed product pages with specifications",
      "Secure payment gateway integration",
      "Mobile-optimized shopping experience",
      "Order management and inventory control",
      "Customer account and order tracking",
      "SEO-friendly structure for organic growth",
    ],
    testimonial: {
      quote:
        "KoDude Technology delivered exactly what we needed. The website has helped us reach RC enthusiasts across India and manage our business far more efficiently. Our online sales and customer trust have grown significantly.",
      author: "Tanish",
      role: "Founder, TanishRC.in",
    },
  },
  "lakshya-singh": {
    title: "LakshyaSingh.com",
    client: "Lakshya Singh",
    category: "Personal Portfolio Website",
    duration: "3 weeks",
    gradient: "from-primary/30 via-accent/20 to-primary/10",
    overview:
      "LakshyaSingh.com is a personal portfolio website built to showcase professional skills, projects, and services as a developer and designer. The goal was to create a modern, high-performance digital presence that reflects personal branding while serving as a strong lead-generation platform.",
    challenge:
      "Lakshya needed a portfolio that stood out in a competitive freelance and tech market. Existing platforms did not offer enough flexibility in performance, customization, and scalability. The challenge was to build a fast, visually appealing website that clearly communicates expertise and converts visitors into inquiries.",
    solution:
      "We designed and developed a fully custom portfolio website using the MERN stack. The site focuses on clean UI, smooth animations, and optimized performance. Dynamic project sections, service highlights, and clear CTAs were implemented to strengthen personal branding and improve client engagement.",
    results: [
      { label: "Increase in Profile Views", value: "90%+", icon: TrendingUp },
      { label: "Project Page Visits", value: "5,000+", icon: Users },
      { label: "Average Time on Site", value: "4.2min", icon: Clock },
      { label: "Client Inquiries", value: "95%+", icon: Target },
    ],
    features: [
      "MERN stack architecture (MongoDB, Express, React, Node.js)",
      "Modern, responsive UI design",
      "Dynamic project and case study sections",
      "Smooth animations and scroll effects",
      "SEO-optimized structure",
      "Fast loading and performance optimization",
      "Contact and inquiry form integration",
      "Scalable architecture for future expansion",
    ],
    testimonial: {
      quote:
        "This portfolio truly represents my skills and personality as a developer. It has helped me attract better clients and showcase my work in a much more professional way. The performance and design exceeded my expectations.",
      author: "Lakshya Singh",
      role: "Developer & Founder, KoDude Technology",
    },
  },
  "metro-realty": {
    title: "Metro Realty",
    client: "Metro Realty",
    category: "Property Developer",
    duration: "5 weeks",
    gradient: "from-primary/25 via-accent/25 to-primary/15",
    overview:
      "Metro Realty is a property development company with multiple ongoing projects across the city. They required a comprehensive platform to showcase all their developments and capture leads for each project individually.",
    challenge:
      "Managing multiple projects with different target audiences was challenging. They needed a centralized platform that could present each project with its unique identity while maintaining brand consistency.",
    solution:
      "We developed a multi-project website architecture with individual landing pages for each development. The system includes project-specific lead capture, comparison tools, and a unified backend for easy management.",
    results: [
      { label: "Lead Quality", value: "60%", icon: TrendingUp },
      { label: "Site Visits", value: "8,000+", icon: Users },
      { label: "Conversions", value: "3.2%", icon: Clock },
      { label: "Projects Shown", value: "6", icon: Target },
    ],
    features: [
      "Multi-project architecture",
      "Individual project landing pages",
      "Virtual tour integration",
      "Price calculator tool",
      "EMI calculator",
      "Downloadable brochures",
    ],
    testimonial: {
      quote:
        "The website perfectly showcases all our projects while maintaining our brand identity. The lead management system has streamlined our sales process significantly.",
      author: "Priya Desai",
      role: "Marketing Head, Metro Realty",
    },
  },
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudies[id] : null;

  if (!study) {
    return (
      <>
        <SEO
          title="Case Study Not Found"
          description="The case study you are looking for could not be found."
          noIndex={true}
        />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-4xl font-display text-foreground mb-4">
              Case Study Not Found
            </h1>
            <Link to="/portfolio" className="text-primary hover:underline">
              Back to Portfolio
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.title} Case Study`,
    description: study.overview,
    author: {
      "@type": "Organization",
      name: "KoDude Technology",
    },
    publisher: {
      "@type": "Organization",
      name: "KoDude Technology",
    },
    about: {
      "@type": "Thing",
      name: study.category,
    },
  };

  return (
    <>
      <SEO
        title={`${study.title} Case Study`}
        description={study.overview.substring(0, 160)}
        canonical={`/case-study/${id}`}
        type="article"
        keywords={[
          study.category.toLowerCase(),
          "case study",
          "web development project",
          "client success story",
          "portfolio",
        ]}
        structuredData={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Portfolio", url: "/portfolio" },
            { name: study.title, url: `/case-study/${id}` },
          ]),
          caseStudySchema,
        ]}
      />

      <main className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section
          className={`pt-32 pb-20 bg-gradient-to-br ${study.gradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full">
                  {study.category}
                </span>
                <span className="text-muted-foreground text-sm">
                  Duration: {study.duration}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                {study.title}
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl">
                {study.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {study.results.map((result) => (
                <div key={result.label} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <result.icon
                      className="w-6 h-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="font-display text-3xl md:text-4xl text-primary mb-2">
                    {result.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-4">
                    The Challenge
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {study.challenge}
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-4">
                    Our Solution
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl text-foreground mb-8 text-center">
                Key Features Delivered
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {study.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl text-primary/30 mb-6" aria-hidden="true">
                "
              </div>
              <blockquote className="font-display text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                {study.testimonial.quote}
              </blockquote>
              <div>
                <div className="font-semibold text-foreground">
                  {study.testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {study.testimonial.role}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-card to-background">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready for Similar Results?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let us discuss how we can help transform your business with a
              stunning website.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start Your Project
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/portfolio">View More Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default CaseStudy;
