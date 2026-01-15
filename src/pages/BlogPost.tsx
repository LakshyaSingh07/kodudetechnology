import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEO, { generateBreadcrumbSchema, generateArticleSchema } from "@/components/SEO";

const blogContent: Record<string, {
  title: string;
  category: string;
  author: string;
  date: string;
  dateISO: string;
  readTime: string;
  content: string[];
  image: string;
}> = {
  "why-real-estate-needs-website": {
    title: "Why Every Real Estate Agent Needs a Website in 2024",
    category: "Real Estate",
    author: "Lakshya Singh",
    date: "Jan 14, 2026",
    dateISO: "2026-01-14",
    readTime: "5 min read",
    image: "from-primary/30 via-accent/20 to-primary/10",
    content: [
      "In today's digital-first world, having a professional website is no longer a luxury for real estate agents—it's a necessity. With over 90% of home buyers starting their search online, your digital presence can make or break your business.",
      "A well-designed website serves as your 24/7 salesperson, showcasing your listings, credentials, and expertise even while you sleep. It builds trust with potential clients before they ever meet you in person.",
      "Key benefits include: increased visibility in local searches, a platform to showcase your portfolio, lead generation through contact forms and WhatsApp integration, and the ability to provide valuable resources that position you as an industry expert.",
      "The investment in a professional website pays for itself many times over. One closed deal from a web lead can generate returns that far exceed the cost of development and maintenance.",
      "Don't let your competition get ahead. In 2024 and beyond, the agents who embrace digital transformation will thrive, while those who resist will struggle to stay relevant.",
    ],
  },
  "seo-tips-small-business": {
    title: "10 SEO Tips That Will Skyrocket Your Small Business",
    category: "SEO",
    author: "Lakshya Singh",
    date: "Jan 15, 2026",
    dateISO: "2026-01-15",
    readTime: "7 min read",
    image: "from-accent/30 via-primary/20 to-accent/10",
    content: [
      "Search Engine Optimization (SEO) is the backbone of online visibility. For small businesses, it's the most cost-effective way to compete with larger companies and attract qualified leads.",
      "Start with keyword research. Understand what your potential customers are searching for and create content that answers their questions. Tools like Google Keyword Planner can help you identify high-value keywords.",
      "Optimize your Google Business Profile. For local businesses, this is crucial. Complete every section, add photos regularly, respond to reviews, and post updates to stay active and visible.",
      "Focus on creating quality content that provides genuine value. Blog posts, guides, and FAQs not only help with SEO but also establish your authority in your industry.",
      "Technical SEO matters too. Ensure your website loads quickly, is mobile-friendly, uses HTTPS, and has a clear site structure. These factors directly impact your search rankings.",
    ],
  },
  "website-design-trends-2024": {
    title: "Top Website Design Trends to Watch in 2024",
    category: "Design",
    author: "Lakshya Singh",
    date: "Jan 10, 2026",
    dateISO: "2026-01-10",
    readTime: "6 min read",
    image: "from-primary/25 via-accent/25 to-primary/15",
    content: [
      "Web design is constantly evolving, and staying current with trends is essential for creating engaging user experiences. Here are the top trends shaping the digital landscape in 2024.",
      "Dark mode and rich, bold colors continue to dominate. Users appreciate the reduced eye strain and the premium feel that darker interfaces provide. Pair this with strategic use of vibrant accent colors for impact.",
      "Micro-interactions and subtle animations are becoming more sophisticated. These small details—hover effects, loading animations, scroll-triggered reveals—add polish and guide users through your content.",
      "AI-powered personalization is no longer futuristic. Websites are increasingly adapting content, recommendations, and even layouts based on user behavior and preferences.",
      "Sustainability in design is gaining traction. This means optimized images, efficient code, and reduced server loads—all contributing to faster sites and smaller carbon footprints.",
    ],
  },
  "whatsapp-business-integration": {
    title: "How WhatsApp Integration Can Double Your Leads",
    category: "Marketing",
    author: "Lakshya Singh",
    date: "Jan 5, 2026",
    dateISO: "2026-01-05",
    readTime: "4 min read",
    image: "from-accent/25 via-primary/25 to-accent/15",
    content: [
      "WhatsApp has over 2 billion users worldwide, making it one of the most powerful communication channels for businesses. Integrating it into your website can dramatically increase your conversion rates.",
      "The beauty of WhatsApp is its immediacy. When a potential customer clicks your WhatsApp button, they can start a conversation instantly. This reduces friction and captures leads at their moment of highest interest.",
      "Pre-filled messages make it even easier. Set up your WhatsApp link to include a greeting or inquiry template, so users don't have to think about what to say first.",
      "For service businesses in India, WhatsApp is particularly effective. It's the preferred communication method for most consumers, and responses feel personal rather than transactional.",
      "Track your WhatsApp leads to measure ROI. Many businesses see 2-3x higher conversion rates from WhatsApp inquiries compared to traditional contact forms.",
    ],
  },
  "mobile-first-design": {
    title: "Mobile-First Design: Why It Matters for Your Business",
    category: "Development",
    author: "Lakshya Singh",
    date: "Jan 15, 2026",
    dateISO: "2026-01-15",
    readTime: "5 min read",
    image: "from-primary/20 via-accent/30 to-primary/20",
    content: [
      "With mobile devices accounting for over 60% of global web traffic, designing for mobile first isn't just a trend—it's a business imperative.",
      "Mobile-first design starts with the smallest screen and progressively enhances for larger devices. This approach ensures your core content and functionality work perfectly on phones, where most users will encounter your site.",
      "Google's mobile-first indexing means the search engine primarily uses the mobile version of your site for ranking. A poor mobile experience directly impacts your SEO performance.",
      "Key mobile-first principles include: thumb-friendly navigation, readable text without zooming, fast load times on cellular networks, and touch-optimized buttons and forms.",
      "The investment in mobile-first design pays dividends across all devices. A site that works beautifully on mobile will work even better on desktop.",
    ],
  },
  "converting-visitors-customers": {
    title: "5 Proven Ways to Convert Website Visitors into Customers",
    category: "Conversion",
    author: "Lakshya Singh",
    date: "Jan 20, 2026",
    dateISO: "2026-01-20",
    readTime: "8 min read",
    image: "from-accent/20 via-primary/30 to-accent/20",
    content: [
      "Traffic means nothing if it doesn't convert. Here are five proven strategies to turn your website visitors into paying customers.",
      "Clear calls-to-action (CTAs) are essential. Every page should guide users toward a specific action—whether it's contacting you, requesting a quote, or making a purchase. Make these buttons prominent and use action-oriented language.",
      "Social proof builds trust instantly. Display testimonials, client logos, case studies, and reviews prominently. People follow the crowd, and seeing others trust your business reduces perceived risk.",
      "Speed matters more than you think. A one-second delay in page load can reduce conversions by 7%. Optimize images, minimize code, and use quality hosting to keep your site lightning fast.",
      "Reduce friction in your forms. Ask only for essential information. Every additional field is a potential drop-off point. Name, email, and phone number are usually enough to start a conversation.",
    ],
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogContent[id] : null;

  if (!post) {
    return (
      <>
        <SEO
          title="Post Not Found"
          description="The blog post you are looking for could not be found."
          noIndex={true}
        />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-4xl font-display text-foreground mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-primary hover:underline">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.content[0].substring(0, 160)}
        canonical={`/blog/${id}`}
        type="article"
        publishedTime={post.dateISO}
        author={post.author}
        keywords={[
          post.category.toLowerCase(),
          "web development",
          "business tips",
          "digital marketing",
        ]}
        structuredData={[
          generateBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${id}` },
          ]),
          generateArticleSchema({
            title: post.title,
            description: post.content[0],
            url: `/blog/${id}`,
            publishedTime: post.dateISO,
          }),
        ]}
      />

      <main className="min-h-screen">
        <Navbar />

        {/* Hero */}
        <section className={`pt-32 pb-20 bg-gradient-to-br ${post.image} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-medium rounded-full mb-6">
                {post.category}
              </span>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.dateISO}>{post.date}</time>
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <article className="prose prose-lg prose-invert max-w-none">
                {post.content.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="text-muted-foreground leading-relaxed mb-6 text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share this article
                  </span>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on Twitter">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full" aria-label="Share on Facebook">
                      <Facebook className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 p-8 bg-card border border-border rounded-2xl text-center">
                <h3 className="font-display text-2xl text-foreground mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let us discuss how we can help you achieve your digital goals.
                </p>
                <Button asChild>
                  <Link to="/contact">Get Started Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default BlogPost;
