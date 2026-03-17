import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animalModels } from "@/data/animalData";
import { servicesData } from "@/data/servicesData";

type SeoConfig = {
  title: string;
  description: string;
  keywords: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
};

const SITE_NAME = "Cryst Bio Solutions";
const DEFAULT_IMAGE = "/favicon.png";

const stripTrailingSlash = (url: string) => url.replace(/\/+$/, "");

const getBaseUrl = () => {
  const configured = import.meta.env.VITE_SITE_URL;
  if (configured) return stripTrailingSlash(configured);
  if (typeof window !== "undefined" && window.location.origin) {
    return stripTrailingSlash(window.location.origin);
  }
  return "https://www.crystbio.com";
};

const upsertMetaByName = (name: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const upsertMetaByProperty = (property: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const setJsonLd = (items: Record<string, unknown>[] = []) => {
  const existing = document.head.querySelectorAll('script[data-seo-jsonld="true"]');
  existing.forEach((node) => node.remove());

  items.forEach((item) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-jsonld", "true");
    script.text = JSON.stringify(item);
    document.head.appendChild(script);
  });
};

const getSeoForPath = (pathname: string): SeoConfig => {
  const isServiceDetail = pathname.startsWith("/services/");
  const isAnimalDetail = pathname.startsWith("/animal-supply/");

  if (pathname === "/") {
    return {
      title: "Preclinical CRO in India | Toxicology & Biocompatibility | Cryst Bio Solutions",
      description:
        "Cryst Bio Solutions is a Pune-based preclinical CRO offering toxicology testing, biocompatibility testing, histopathology, microbiology, and laboratory animal supply.",
      keywords:
        "preclinical CRO India, toxicology testing Pune, biocompatibility testing, laboratory animal supply, histopathology services, microbiology testing",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Cryst Bio Solutions Pvt. Ltd.",
          url: getBaseUrl(),
          logo: `${getBaseUrl()}/favicon.png`,
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+91-7276361762",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["en"],
            },
          ],
          sameAs: ["https://www.linkedin.com/company/crystal-biological-solutions"],
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: getBaseUrl(),
          potentialAction: {
            "@type": "SearchAction",
            target: `${getBaseUrl()}/services`,
            "query-input": "required name=search_term_string",
          },
        },
      ],
    };
  }

  if (pathname === "/about") {
    return {
      title: "About Cryst Bio Solutions | Preclinical Research Expertise",
      description:
        "Learn about Cryst Bio Solutions, our mission, scientific leadership, quality systems, and commitment to ethical, compliant preclinical research.",
      keywords:
        "about Cryst Bio Solutions, preclinical research company, CRO Pune, scientific team, quality compliance",
    };
  }

  if (pathname === "/services") {
    return {
      title: "Preclinical Services | Toxicology, Biocompatibility, Microbiology",
      description:
        "Explore our preclinical services including toxicology, biocompatibility, agrochemical testing, research projects, histopathology, and microbiology.",
      keywords:
        "preclinical services, toxicology services, biocompatibility testing, agrochemical testing, CRO services India",
    };
  }

  if (isServiceDetail) {
    const slug = pathname.replace("/services/", "").replace(/\/$/, "");
    const service = servicesData.find((entry) => entry.slug === slug);
    if (service) {
      return {
        title: `${service.title} | Cryst Bio Solutions`,
        description: service.shortDesc,
        keywords: `${service.title.toLowerCase()}, preclinical ${service.title.toLowerCase()}, ${service.standards.slice(0, 3).join(", ").toLowerCase()}, Cryst Bio Solutions`,
        type: "article",
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.shortDesc,
            provider: {
              "@type": "Organization",
              name: "Cryst Bio Solutions Pvt. Ltd.",
              url: getBaseUrl(),
            },
            areaServed: "IN",
          },
        ],
      };
    }
  }

  if (pathname === "/facilities") {
    return {
      title: "Facilities & Infrastructure | Cryst Bio Solutions",
      description:
        "Discover our state-of-the-art preclinical research infrastructure, controlled environments, and quality-focused laboratory systems.",
      keywords:
        "preclinical laboratory facilities, CRO infrastructure, GLP facility India, research labs Pune",
    };
  }

  if (pathname === "/animal-supply") {
    return {
      title: "Laboratory Animal Supply | CPCSEA Approved Breeding Facility",
      description:
        "In-house bred laboratory animals including rats, mice, rabbits, guinea pigs, and hamsters from a CPCSEA-approved facility in Pune.",
      keywords:
        "laboratory animal supply, CPCSEA approved animal breeder, rats mice rabbits supply India, preclinical animal models",
    };
  }

  if (isAnimalDetail) {
    const slug = pathname.replace("/animal-supply/", "").replace(/\/$/, "");
    const animal = animalModels.find((entry) => entry.slug === slug);
    if (animal) {
      return {
        title: `${animal.name} for Research Studies | Cryst Bio Solutions`,
        description: animal.shortDesc,
        keywords: `${animal.name.toLowerCase()} for research, laboratory ${animal.name.toLowerCase()}, CPCSEA animal supply, preclinical models`,
        type: "article",
        jsonLd: [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${animal.name} Laboratory Animal Supply`,
            description: animal.shortDesc,
            provider: {
              "@type": "Organization",
              name: "Cryst Bio Solutions Pvt. Ltd.",
              url: getBaseUrl(),
            },
            areaServed: "IN",
          },
        ],
      };
    }
  }

  if (pathname === "/certifications") {
    return {
      title: "Certifications & Accreditations | Cryst Bio Solutions",
      description:
        "Review our key certifications and accreditations including quality and regulatory recognitions supporting global preclinical compliance.",
      keywords:
        "CRO certifications, NABL accreditation, preclinical compliance, quality certifications India",
    };
  }

  if (pathname === "/gallery") {
    return {
      title: "Gallery | Cryst Bio Solutions",
      description:
        "Explore visual highlights of our laboratories, facilities, team, and research environment at Cryst Bio Solutions.",
      keywords:
        "CRO gallery, laboratory photos, preclinical facility images, Cryst Bio Solutions gallery",
    };
  }

  if (pathname === "/testimonials") {
    return {
      title: "Client Testimonials | Cryst Bio Solutions",
      description:
        "Read what partners and clients say about our preclinical testing quality, timelines, and scientific collaboration.",
      keywords:
        "CRO testimonials, preclinical client feedback, toxicology testing reviews, Cryst Bio Solutions clients",
    };
  }

  if (pathname === "/contact") {
    return {
      title: "Contact Cryst Bio Solutions | Request a Quote",
      description:
        "Contact Cryst Bio Solutions for toxicology testing, biocompatibility studies, and laboratory animal supply. Speak with our team in Pune.",
      keywords:
        "contact preclinical CRO, request toxicology quote, Cryst Bio Solutions contact, CRO Pune contact",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Cryst Bio Solutions",
          url: `${getBaseUrl()}/contact`,
        },
      ],
    };
  }

  if (pathname === "/faq") {
    return {
      title: "FAQ | Cryst Bio Solutions",
      description:
        "Find answers to common questions about our preclinical testing services, compliance standards, turnaround times, and engagement process.",
      keywords:
        "preclinical CRO FAQ, toxicology testing questions, biocompatibility FAQ, laboratory animal supply FAQ",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What services do you offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We provide preclinical research services including toxicology testing, biocompatibility evaluation, histopathology, microbiology analysis, and custom research protocols, along with laboratory animal supply.",
              },
            },
            {
              "@type": "Question",
              name: "Are your facilities accredited?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our laboratories are NABL accredited (ISO/IEC 17025:2017) and CPCSEA approved, and we operate under ISO 9001:2015 quality management systems.",
              },
            },
            {
              "@type": "Question",
              name: "How do I request a quote?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You can request a quotation through our contact form, by emailing info@crystbio.com, or by calling our team directly.",
              },
            },
          ],
        },
      ],
    };
  }

  return {
    title: "Page Not Found | Cryst Bio Solutions",
    description: "The page you are looking for could not be found.",
    keywords: "404, page not found, Cryst Bio Solutions",
    noindex: true,
  };
};

const SEOManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(pathname);
    const baseUrl = getBaseUrl();
    const canonical = `${baseUrl}${pathname === "/" ? "" : pathname}`;
    const imageUrl = seo.image
      ? new URL(seo.image, baseUrl).toString()
      : `${baseUrl}${DEFAULT_IMAGE}`;

    document.title = seo.title;

    upsertMetaByName("description", seo.description);
    upsertMetaByName("keywords", seo.keywords);
    upsertMetaByName("author", "Cryst Bio Solutions | Developed by Prathamesh Pawar");
    upsertMetaByName(
      "robots",
      seo.noindex
        ? "noindex, nofollow"
        : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    );

    upsertMetaByProperty("og:type", seo.type ?? "website");
    upsertMetaByProperty("og:title", seo.title);
    upsertMetaByProperty("og:description", seo.description);
    upsertMetaByProperty("og:url", canonical);
    upsertMetaByProperty("og:site_name", SITE_NAME);
    upsertMetaByProperty("og:image", imageUrl);
    upsertMetaByProperty("og:locale", "en_IN");

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", seo.title);
    upsertMetaByName("twitter:description", seo.description);
    upsertMetaByName("twitter:image", imageUrl);
    upsertMetaByName("twitter:site", "@crystbio");

    upsertCanonical(canonical);
    setJsonLd(seo.jsonLd);
  }, [pathname]);

  return null;
};

export default SEOManager;
