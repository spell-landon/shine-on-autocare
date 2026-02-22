import {
  SITE_URL,
  BUSINESS_NAME,
  EMAIL,
  ADDRESS,
  SOCIAL_LINKS,
} from "./constants";

export function buildLocalBusinessBase() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: "+1-830-569-9054",
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS,
      addressLocality: "Pleasanton",
      addressRegion: "TX",
      postalCode: "78064",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.9683,
      longitude: -98.4786,
    },
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.tiktok,
      SOCIAL_LINKS.yelp,
    ],
  };
}

export function buildServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "AutoRepair",
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 28.9683,
        longitude: -98.4786,
      },
      geoRadius: "80467",
    },
    ...(service.price && {
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "USD",
      },
    }),
  };
}

export function buildArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image,
    datePublished: article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
  };
}

export function buildFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
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
  };
}

export function buildReviewSchema(reviews: Array<{
  name: string;
  text: string;
  rating?: number;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS_NAME,
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: String(reviews.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating ?? 5),
        bestRating: "5",
      },
    })),
  };
}

export function buildLocationSchema(location: {
  city: string;
  state: string;
  url: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: `${BUSINESS_NAME} — ${location.city}, ${location.state}`,
    url: location.url,
    description: location.description,
    telephone: "+1-830-569-9054",
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS,
      addressLocality: "Pleasanton",
      addressRegion: "TX",
      postalCode: "78064",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.tiktok,
      SOCIAL_LINKS.yelp,
    ],
  };
}
