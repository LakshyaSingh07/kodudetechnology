import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

const blogPosts = [
  {
    id: "why-real-estate-needs-website",
    title: "Why Every Real Estate Agent Needs a Website in 2024",
    excerpt: "Discover how a professional website can transform your real estate business and generate more qualified leads than ever before.",
    category: "Real Estate",
    author: "KoDude Team",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    image: "from-primary/30 via-accent/20 to-primary/10",
  },
  {
    id: "seo-tips-small-business",
    title: "10 SEO Tips That Will Skyrocket Your Small Business",
    excerpt: "Learn the essential SEO strategies that will help your business rank higher on Google and attract more organic traffic.",
    category: "SEO",
    author: "KoDude Team",
    date: "Dec 15, 2024",
    readTime: "7 min read",
    image: "from-accent/30 via-primary/20 to-accent/10",
  },
  {
    id: "website-design-trends-2024",
    title: "Top Website Design Trends to Watch in 2024",
    excerpt: "Stay ahead of the curve with these cutting-edge design trends that are shaping the future of web development.",
    category: "Design",
    author: "KoDude Team",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    image: "from-primary/25 via-accent/25 to-primary/15",
  },
  {
    id: "whatsapp-business-integration",
    title: "How WhatsApp Integration Can Double Your Leads",
    excerpt: "Explore the power of WhatsApp business integration and how it can revolutionize your customer communication.",
    category: "Marketing",
    author: "KoDude Team",
    date: "Dec 5, 2024",
    readTime: "4 min read",
    image: "from-accent/25 via-primary/25 to-accent/15",
  },
  {
    id: "mobile-first-design",
    title: "Mobile-First Design: Why It Matters for Your Business",
    excerpt: "With over 60% of web traffic coming from mobile devices, learn why mobile-first design is no longer optional.",
    category: "Development",
    author: "KoDude Team",
    date: "Nov 28, 2024",
    readTime: "5 min read",
    image: "from-primary/20 via-accent/30 to-primary/20",
  },
  {
    id: "converting-visitors-customers",
    title: "5 Proven Ways to Convert Website Visitors into Customers",
    excerpt: "Master the art of conversion optimization with these battle-tested strategies used by successful businesses.",
    category: "Conversion",
    author: "KoDude Team",
    date: "Nov 20, 2024",
    readTime: "8 min read",
    image: "from-accent/20 via-primary/30 to-accent/20",
  },
];

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "KoDude Technology Blog",
  description: "Web development insights, SEO tips, and digital marketing strategies",
  url: "https://kodude.in/blog",
  publisher: {
    "@type": "Organization",
    name: "KoDude Technology",
    logo: {
      "@type": "ImageObject",
      url: "https://kodude.in/favicon.ico",
    },
  },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://kodude.in/blog/${post.id}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
  })),
};

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <SEO
        title="Blog"
        description="Stay updated with the latest web development trends, SEO tips, and digital marketing strategies from KoDude Technology experts. Learn how to grow your business online."
        canonical="/blog"
        keywords={[
          "web development blog",
          "SEO tips",
          "digital marketing strategies",
          "website design tips",
          "real estate marketing",
          "business growth online",
        ]}
        structuredData={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
          ]),
          blogListSchema,
        ]}
      />

      <main className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-navy to-background relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Our Blog
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Insights & <span className="text-primary">Inspiration</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Stay ahead with the latest trends, tips, and strategies in web development and digital marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section 
          className="py-20 bg-background"
          ref={ref as React.RefObject<HTMLElement>}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className={`group block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <article className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                    {/* Image */}
                    <div className={`h-48 bg-gradient-to-br ${post.image} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                      <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Read More */}
                      <div className="mt-4 pt-4 border-t border-border/50 flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Blog;
