import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article" | "product";
  image?: string;
  imageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  noIndex?: boolean;
  structuredData?: object | object[];
}

const SITE_URL = "https://kodude.in";
const SITE_NAME = "KoDude Technology";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
const TWITTER_HANDLE = "@kodudetech";

const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  image = DEFAULT_IMAGE,
  imageAlt = "KoDude Technology - Where Ideas Become Digital Reality",
  publishedTime,
  modifiedTime,
  author = "KoDude Technology",
  keywords = [],
  noIndex = false,
  structuredData,
}: SEOProps) => {
  const toAbsoluteUrl = (value?: string) => {
    if (!value) return undefined;
    return value.startsWith("http") ? value : `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
  };

  const fullTitle = title.includes("KoDude") ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = toAbsoluteUrl(canonical);
  const imageUrl = toAbsoluteUrl(image) ?? DEFAULT_IMAGE;
  const metaKeywords = keywords.length ? Array.from(new Set(keywords)).join(", ") : undefined;

  // Organization structured data (always included)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KoDude Technology",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: "Premium web development services for local businesses in India",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "IN",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8077533278",
      contactType: "sales",
      email: "kodude.in@gmail.com",
    },
    sameAs: [
      "https://twitter.com/kodudetech",
      "https://linkedin.com/company/kodude",
      "https://instagram.com/kodude.in",
    ],
  };

  // Website structured data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };

  // Combine all structured data
  const allStructuredData = [
    organizationSchema,
    websiteSchema,
    ...(Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : []),
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {metaKeywords && <meta name="keywords" content={metaKeywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific OG tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#D4AF37" />
      <meta name="msapplication-TileColor" content="#0A0A0F" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Noida, Uttar Pradesh" />
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Helmet>
  );
};

export default SEO;

// Pre-built structured data generators
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const generateServiceSchema = (services: { name: string; description: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: "KoDude Technology",
      },
    },
  })),
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://kodude.in${item.url}`,
  })),
});

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  url: `https://kodude.in${article.url}`,
  image: article.image || "https://kodude.in/og-image.png",
  datePublished: article.publishedTime,
  dateModified: article.modifiedTime || article.publishedTime,
  author: {
    "@type": "Organization",
    name: article.author || "KoDude Technology",
  },
  publisher: {
    "@type": "Organization",
    name: "KoDude Technology",
    logo: {
      "@type": "ImageObject",
      url: "https://kodude.in/favicon.ico",
    },
  },
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KoDude Technology",
  description: "Premium web development services for local businesses in India",
  url: "https://kodude.in",
  telephone: "+91-8077533278",
  email: "kodude.in@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "UP",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
});
