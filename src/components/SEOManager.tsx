import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animalModels } from "@/data/animalData";
import { servicesData } from "@/data/servicesData";
import { faqData } from "@/data/faqData";

type SeoConfig = {
  title: string;
  description: string;
  keywords: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
};

const SITE_NAME = "Cryst Bio Solutions Pvt. Ltd.";
const ORG_NAME = "Cryst Bio Solutions Pvt. Ltd.";
const DEFAULT_IMAGE = "/og-image.png";
const SITE_PHONE = "+91-7276361762";
const SITE_EMAIL = "enquiry@crystbio.com";
const SITE_ADDRESS = {
  street: "Cryst Bio Solutions Pvt. Ltd.",
  city: "Pune",
  state: "Maharashtra",
  country: "India",
};
const SITE_SAME_AS = ["https://www.linkedin.com/company/crystal-biological-solutions"];

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

// Shared LocalBusiness + Organization schema (injected as a single @graph)
const getLocalBusinessGraph = (baseUrl: string): Record<string, unknown>[] => [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: ORG_NAME,
    url: baseUrl,
    logo: `${baseUrl}/favicon.png`,
    description: "Preclinical CRO in India offering toxicology testing, biocompatibility, histopathology, microbiology, and laboratory animal supply.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS.street,
      addressLocality: SITE_ADDRESS.city,
      addressRegion: SITE_ADDRESS.state,
      addressCountry: SITE_ADDRESS.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_PHONE,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en"],
      },
    ],
    sameAs: SITE_SAME_AS,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: SITE_NAME,
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/services`,
      },
      "query-input": "required name=search_term_string",
    },
  },
];

// Shared BreadcrumbList helper
const getBreadcrumbList = (baseUrl: string, items: { name: string; url: string }[]): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${baseUrl}${items[items.length - 1].url}#breadcrumb`,
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${baseUrl}${item.url}`,
  })),
});

const getSeoForPath = (pathname: string): SeoConfig => {
  const baseUrl = getBaseUrl();
  const isServiceDetail = pathname.startsWith("/services/");
  const isAnimalDetail = pathname.startsWith("/animal-supply/");

  if (pathname === "/") {
    return {
      title: "Preclinical CRO in India | Toxicology & Biocompatibility | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "Cryst Bio Solutions Pvt. Ltd. is a Pune-based preclinical CRO offering toxicology testing, biocompatibility testing, histopathology, microbiology, and laboratory animal supply.",
      keywords:
        "preclinical CRO India, toxicology testing Pune, biocompatibility testing, laboratory animal supply, histopathology services, microbiology testing",
      jsonLd: [
        ...getLocalBusinessGraph(baseUrl),
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#localbusiness`,
          name: ORG_NAME,
          url: baseUrl,
          telephone: SITE_PHONE,
          email: SITE_EMAIL,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE_ADDRESS.street,
            addressLocality: SITE_ADDRESS.city,
            addressRegion: SITE_ADDRESS.state,
            postalCode: "",
            addressCountry: SITE_ADDRESS.country,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "18:00",
            },
          ],
          areaServed: ["IN", "EU"],
          hasCredential: [
            "NABL Accreditation (ISO/IEC 17025:2017)",
            "CCSEA Certification",
            "CCSEA Registration",
            "IAS Accredited",
            "MSME Registration",
            "Global CRO",
          ],
          parentOrganization: { "@id": `${baseUrl}/#organization` },
        },
        {
          "@context": "https://schema.org",
          "@type": "ImageObject",
          "@id": `${baseUrl}/#ogimage`,
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          caption: "Cryst Bio Solutions Pvt. Ltd. - Preclinical CRO India",
        },
      ],
    };
  }

  if (pathname === "/about") {
    return {
      title: "About Cryst Bio Solutions Pvt. Ltd. | Preclinical Research Expertise",
      description:
        "Learn about Cryst Bio Solutions Pvt. Ltd., our mission, scientific leadership, quality systems, and commitment to ethical, compliant preclinical research.",
      keywords:
        "about Cryst Bio Solutions Pvt. Ltd., preclinical research company, CRO Pune, scientific team, quality compliance",
      jsonLd: [
        getBreadcrumbList(baseUrl, [
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]),
        ...getLocalBusinessGraph(baseUrl),
      ],
    };
  }

  if (pathname === "/services") {
    return {
      title: "Preclinical Services | Toxicology, Biocompatibility, Microbiology",
      description:
        "Explore our preclinical services including toxicology, biocompatibility, agrochemical testing, research projects, histopathology, and microbiology.",
      keywords:
        "preclinical services, toxicology services, biocompatibility testing, agrochemical testing, CRO services India",
      jsonLd: [
        getBreadcrumbList(baseUrl, [
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]),
        ...getLocalBusinessGraph(baseUrl),
      ],
    };
  }

  if (isServiceDetail) {
    const slug = pathname.replace("/services/", "").replace(/\/$/, "");
    const service = servicesData.find((entry) => entry.slug === slug);
    if (service) {
      return {
        title: `${service.title} | Cryst Bio Solutions Pvt. Ltd.`,
        description: service.shortDesc,
        keywords: `${service.title.toLowerCase()}, preclinical ${service.title.toLowerCase()}, ${service.standards.slice(0, 3).join(", ").toLowerCase()}, Cryst Bio Solutions Pvt. Ltd.`,
        type: "article",
        jsonLd: [
          getBreadcrumbList(baseUrl, [
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: service.title, url: `/services/${service.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${baseUrl}/services/${service.slug}#service`,
            name: service.title,
            description: service.shortDesc,
            provider: {
              "@type": "Organization",
              "@id": `${baseUrl}/#organization`,
              name: ORG_NAME,
              url: baseUrl,
            },
            areaServed: "IN",
            serviceType: service.title,
            termsOfService: `${baseUrl}/terms-of-service`,
          },
        ],
      };
    }
  }

  if (pathname === "/facilities") {
    return {
      title: "Facilities & Infrastructure | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "Discover our state-of-the-art preclinical research infrastructure, controlled environments, and quality-focused laboratory systems.",
      keywords:
        "preclinical laboratory facilities, CRO infrastructure, GLP facility India, research labs Pune",
      jsonLd: [
        getBreadcrumbList(baseUrl, [
          { name: "Home", url: "/" },
          { name: "Facilities", url: "/facilities" },
        ]),
        ...getLocalBusinessGraph(baseUrl),
      ],
    };
  }

  if (pathname === "/animal-supply") {
    return {
      title: "Laboratory Animal Supply | CCSEA Approved Breeding Facility",
      description:
        "In-house bred laboratory animals including rats, mice, rabbits, guinea pigs, and hamsters from a CCSEA-approved facility in Pune.",
      keywords:
        "laboratory animal supply, CCSEA approved animal breeder, rats mice rabbits supply India, preclinical animal models",
      jsonLd: [
        getBreadcrumbList(baseUrl, [
          { name: "Home", url: "/" },
          { name: "Animal Supply", url: "/animal-supply" },
        ]),
        ...getLocalBusinessGraph(baseUrl),
      ],
    };
  }

  if (isAnimalDetail) {
    const slug = pathname.replace("/animal-supply/", "").replace(/\/$/, "");
    const animal = animalModels.find((entry) => entry.slug === slug);
    if (animal) {
      return {
        title: `${animal.name} for Research Studies | Cryst Bio Solutions Pvt. Ltd.`,
        description: animal.shortDesc,
        keywords: `${animal.name.toLowerCase()} for research, laboratory ${animal.name.toLowerCase()}, CCSEA animal supply, preclinical models`,
        type: "article",
        jsonLd: [
          getBreadcrumbList(baseUrl, [
            { name: "Home", url: "/" },
            { name: "Animal Supply", url: "/animal-supply" },
            { name: animal.name, url: `/animal-supply/${animal.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": `${baseUrl}/animal-supply/${animal.slug}#product`,
            name: `${animal.name} - Laboratory Animal Models`,
            description: animal.shortDesc,
            animal: animal.name,
            brand: {
              "@type": "Organization",
              "@id": `${baseUrl}/#organization`,
              name: ORG_NAME,
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              areaServed: "IN",
            },
            category: "Laboratory Animals",
          },
        ],
      };
    }
  }

  if (pathname === "/certifications") {
    return {
      title: "Certifications & Accreditations | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "Review our key certifications and accreditations including quality and regulatory recognitions supporting global preclinical compliance.",
      keywords:
        "CRO certifications, NABL accreditation, preclinical compliance, quality certifications India",
      jsonLd: [
        getBreadcrumbList(baseUrl, [
          { name: "Home", url: "/" },
          { name: "Certifications", url: "/certifications" },
        ]),
        ...getLocalBusinessGraph(baseUrl),
      ],
    };
  }

  if (pathname === "/gallery") {
    return {
      title: "Gallery | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "Explore visual highlights of our laboratory, facilities, team, and research environment at Cryst Bio Solutions Pvt. Ltd.",
      keywords:
        "CRO gallery, laboratory photos, preclinical facility images, Cryst Bio Solutions Pvt. Ltd. gallery",
      jsonLd: [
        getBreadcrumbList(baseUrl, [
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ]),
        ...getLocalBusinessGraph(baseUrl),
      ],
    };
  }

  if (pathname === "/testimonials") {
    return {
      title: "Client Testimonials | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "Read what partners and clients say about our preclinical testing quality, timelines, and scientific collaboration.",
      keywords:
        "CRO testimonials, preclinical client feedback, toxicology testing reviews, Cryst Bio Solutions Pvt. Ltd. clients",
      jsonLd: [
        getBreadcrumbList(baseUrl, [
          { name: "Home", url: "/" },
          { name: "Testimonials", url: "/testimonials" },
        ]),
        ...getLocalBusinessGraph(baseUrl),
      ],
    };
  }

  if (pathname === "/contact") {
    return {
      title: "Contact Cryst Bio Solutions Pvt. Ltd. | Request a Quote",
      description:
        "Contact Cryst Bio Solutions Pvt. Ltd. for toxicology testing, biocompatibility studies, and laboratory animal supply. Speak with our team in Pune.",
      keywords:
        "contact preclinical CRO, request toxicology quote, Cryst Bio Solutions Pvt. Ltd. contact, CRO Pune contact",
      jsonLd: [
        getBreadcrumbList(baseUrl, [
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": `${baseUrl}/contact#contactpage`,
          name: "Contact Cryst Bio Solutions Pvt. Ltd.",
          url: `${baseUrl}/contact`,
          description: "Contact us for toxicology testing, biocompatibility studies, and laboratory animal supply.",
          mainEntity: {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`,
          },
        },
        ...getLocalBusinessGraph(baseUrl),
      ],
    };
  }

  if (pathname === "/faq") {
    return {
      title: "FAQ | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "Find answers to common questions about our preclinical testing services, compliance standards, turnaround times, and engagement process.",
      keywords:
        "preclinical CRO FAQ, toxicology testing questions, biocompatibility FAQ, laboratory animal supply FAQ",
      jsonLd: [
        getBreadcrumbList(baseUrl, [
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${baseUrl}/faq#faqpage`,
          mainEntity: faqData.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
        ...getLocalBusinessGraph(baseUrl),
      ],
    };
  }

  if (pathname === "/privacy-policy") {
    return {
      title: "Privacy Policy | Cryst Bio Solutions Pvt. Ltd.",
      description: "Cryst Bio Solutions Pvt. Ltd.'s privacy policy — how we collect, use, and protect your personal information.",
      keywords: "privacy policy, data protection, Cryst Bio Solutions Pvt. Ltd. privacy",
      noindex: true,
      jsonLd: [
        getBreadcrumbList(baseUrl, [
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy-policy" },
        ]),
        ...getLocalBusinessGraph(baseUrl),
      ],
    };
  }

  if (pathname === "/terms-of-service") {
    return {
      title: "Terms of Service | Cryst Bio Solutions Pvt. Ltd.",
      description: "Terms and conditions governing the use of Cryst Bio Solutions Pvt. Ltd.'s website and services.",
      keywords: "terms of service, terms and conditions, Cryst Bio Solutions Pvt. Ltd. terms",
      noindex: true,
      jsonLd: [
        getBreadcrumbList(baseUrl, [
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms-of-service" },
        ]),
        ...getLocalBusinessGraph(baseUrl),
      ],
    };
  }

  return {
    title: "Page Not Found | Cryst Bio Solutions Pvt. Ltd.",
    description: "The page you are looking for could not be found.",
    keywords: "404, page not found, Cryst Bio Solutions Pvt. Ltd.",
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
    upsertMetaByName("author", "Cryst Bio Solutions Pvt. Ltd. | Developed by Prathamesh Pawar");
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
    upsertMetaByProperty("og:image:width", "1200");
    upsertMetaByProperty("og:image:height", "630");
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
