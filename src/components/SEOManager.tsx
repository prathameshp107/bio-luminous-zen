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
const ORG_LEGAL_NAME = "Cryst Bio Solutions Private Limited";
const DEFAULT_IMAGE = "/og-image.png";
const SITE_PHONE = "+91-7276361762";
const SITE_EMAIL = "enquiry@crystbio.com";
const SITE_ADDRESS = {
  street: "SR. NO. 311/5, Plot No. 60-61, D Global Building, Sai Park, Lane No. 5, Shewalwadi Road, Uruli Devachi",
  city: "Pune",
  state: "Maharashtra",
  postalCode: "412308",
  country: "IN",
};
const SITE_GEO = { latitude: 18.4311, longitude: 74.007 };
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

const getLocalBusinessGraph = (baseUrl: string): Record<string, unknown>[] => [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "MedicalOrganization"],
    "@id": `${baseUrl}/#organization`,
    name: ORG_NAME,
    legalName: ORG_LEGAL_NAME,
    url: baseUrl,
    logo: `${baseUrl}/favicon.png`,
    foundingDate: "2018",
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    description:
      "NABL & IAS accredited preclinical CRO in Pune, India — toxicology testing, biocompatibility testing, agrochemical testing, histopathology, microbiology, and CCSEA-registered laboratory animal supply.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS.street,
      addressLocality: SITE_ADDRESS.city,
      addressRegion: SITE_ADDRESS.state,
      postalCode: SITE_ADDRESS.postalCode,
      addressCountry: SITE_ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    areaServed: ["IN", "EU", "US", "AP"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_PHONE,
        email: SITE_EMAIL,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en"],
      },
    ],
    hasCredential: [
      "NABL Accreditation TC-15118 (ISO/IEC 17025:2017, valid until 2030)",
      "IAS Accreditation TL-1015 (ISO/IEC 17025:2017, effective December 2025)",
      "CCSEA Registration 2030/PO/RcBiBt/S/18/CCSEA",
      "MSME / Udyam Registration UDYAM-MH-26-0118144",
      "IEC AALCC9227D",
      "Company Registration U71200PN2024PTC231728",
    ],
    knowsAbout: [
      "Preclinical Toxicology Testing",
      "Biocompatibility Testing ISO 10993",
      "Agrochemical Testing OECD Guidelines",
      "Histopathology and Clinical Pathology",
      "Microbiology Testing",
      "Laboratory Animal Supply",
      "GLP Compliance",
      "OECD Guidelines",
      "ICH Guidelines",
      "CDSCO Regulations",
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 9,
    },
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
      title: "Preclinical CRO in India | NABL & IAS Accredited | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "Cryst Bio Solutions Pvt. Ltd. — NABL & IAS accredited preclinical CRO in Pune, India. GLP-compliant toxicology testing, biocompatibility (ISO 10993), agrochemical testing, histopathology, microbiology, and CCSEA-registered laboratory animal supply.",
      keywords:
        "preclinical CRO India, NABL accredited CRO Pune, toxicology testing India, biocompatibility testing ISO 10993, contract research organization Pune, GLP laboratory India, laboratory animal supply, histopathology services India, CCSEA registered CRO",
      jsonLd: [
        ...getLocalBusinessGraph(baseUrl),
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#localbusiness`,
          name: ORG_NAME,
          legalName: ORG_LEGAL_NAME,
          url: baseUrl,
          telephone: SITE_PHONE,
          email: SITE_EMAIL,
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE_ADDRESS.street,
            addressLocality: SITE_ADDRESS.city,
            addressRegion: SITE_ADDRESS.state,
            postalCode: SITE_ADDRESS.postalCode,
            addressCountry: SITE_ADDRESS.country,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: SITE_GEO.latitude,
            longitude: SITE_GEO.longitude,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "18:00",
            },
          ],
          priceRange: "$$",
          currenciesAccepted: "INR",
          areaServed: ["IN", "EU", "US", "AP"],
          hasCredential: [
            "NABL Accreditation TC-15118 (ISO/IEC 17025:2017)",
            "IAS Accreditation TL-1015 (ISO/IEC 17025:2017)",
            "CCSEA Registration 2030/PO/RcBiBt/S/18/CCSEA",
            "MSME / Udyam Registration UDYAM-MH-26-0118144",
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
          caption: "Cryst Bio Solutions Pvt. Ltd. — NABL & IAS Accredited Preclinical CRO, Pune, India",
        },
      ],
    };
  }

  if (pathname === "/about") {
    return {
      title: "About Us | NABL Accredited Preclinical CRO Pune | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "Cryst Bio Solutions Pvt. Ltd. is a Pune-based NABL & IAS accredited preclinical CRO established in 2018. Learn about our scientific leadership, GLP-compliant systems, CCSEA-registered animal facility, and commitment to globally accepted preclinical research.",
      keywords:
        "about Cryst Bio Solutions Pvt. Ltd., NABL accredited CRO India, preclinical research company Pune, contract research organization history, GLP compliant CRO, scientific team Pune, preclinical CRO Maharashtra",
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
      title: "Preclinical Testing Services | NABL Accredited CRO in Pune, India",
      description:
        "NABL & IAS accredited preclinical testing services at Cryst Bio Solutions Pvt. Ltd. — toxicology (OECD/ICH), biocompatibility (ISO 10993), agrochemical testing, histopathology, microbiology, and GLP-compliant research projects.",
      keywords:
        "preclinical services India, NABL accredited testing laboratory, toxicology services Pune, biocompatibility testing ISO 10993, agrochemical testing OECD, CRO services India, GLP testing laboratory, CDSCO compliant CRO",
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
        title: `${service.title} | NABL Accredited | Cryst Bio Solutions Pvt. Ltd., Pune`,
        description: `${service.shortDesc} Conducted at NABL & IAS accredited facility in Pune under GLP-compliant conditions. OECD & ICH guidelines followed.`,
        keywords: `${service.title.toLowerCase()}, preclinical ${service.title.toLowerCase()} India, ${service.standards.slice(0, 3).join(", ").toLowerCase()}, NABL accredited ${service.title.toLowerCase()}, GLP ${service.title.toLowerCase()} Pune`,
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
            areaServed: ["IN", "EU", "US"],
            serviceType: service.title,
            termsOfService: `${baseUrl}/terms-of-service`,
          },
        ],
      };
    }
  }

  if (pathname === "/facilities") {
    return {
      title: "GLP Laboratory Facilities | NABL Accredited Infrastructure | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "State-of-the-art, NABL & IAS accredited, GLP-compliant preclinical laboratory facilities at Cryst Bio Solutions Pvt. Ltd., Pune — dedicated testing areas, CCSEA-registered animal facility, bioanalytical lab, and modern analytical instrumentation.",
      keywords:
        "GLP laboratory India, NABL accredited facility Pune, preclinical lab infrastructure, GLP compliant CRO India, CCSEA animal facility, bioanalytical laboratory Pune, preclinical research infrastructure Maharashtra",
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
      title: "Laboratory Animal Supply | CCSEA Registered Breeder Pune | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "In-house bred laboratory animals — rats, mice, rabbits, guinea pigs — from CCSEA-registered animal facility (Reg. 2030/PO/RcBiBt/S/18/CCSEA) at Cryst Bio Solutions Pvt. Ltd., Pune, India.",
      keywords:
        "laboratory animal supply India, CCSEA approved animal breeder Pune, laboratory rats mice rabbits supply, preclinical animal models India, Sprague Dawley rats, Wistar rats, BALB/c mice, New Zealand rabbits, laboratory animal breeding India",
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
        title: `${animal.name} for Research | CCSEA Registered Supply | Cryst Bio Solutions Pvt. Ltd.`,
        description: `${animal.shortDesc} Supplied from CCSEA-registered breeding facility (Reg. 2030/PO/RcBiBt/S/18/CCSEA) at Cryst Bio Solutions Pvt. Ltd., Pune, India.`,
        keywords: `${animal.name.toLowerCase()} for research India, laboratory ${animal.name.toLowerCase()} supply Pune, CCSEA registered ${animal.name.toLowerCase()}, preclinical ${animal.name.toLowerCase()} models, ${animal.name.toLowerCase()} breeding facility India`,
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
      title: "NABL, IAS & CCSEA Accreditations | Certifications | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "Cryst Bio Solutions Pvt. Ltd. holds NABL accreditation (TC-15118, valid to April 2030), IAS accreditation (TL-1015, ISO/IEC 17025:2017), CCSEA registration, MSME/Udyam, and IEC — enabling globally accepted preclinical testing results.",
      keywords:
        "NABL accreditation TC-15118, IAS accreditation TL-1015, CCSEA registration India, ISO/IEC 17025:2017 laboratory, accredited CRO India, MSME registered CRO, IEC certified laboratory, preclinical compliance certifications",
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
      title: "Laboratory Facility Gallery | Preclinical CRO Pune | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "View NABL-accredited laboratory, CCSEA-registered animal facility, testing equipment, and research environment at Cryst Bio Solutions Pvt. Ltd., Pune, India.",
      keywords:
        "preclinical CRO laboratory photos, NABL accredited lab gallery, Cryst Bio Solutions facility images, GLP laboratory Pune photos, animal facility images India",
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
      title: "Client Testimonials | Trusted Preclinical CRO India | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "Read what pharmaceutical, medical device, biotech, and agrochemical clients say about preclinical testing at Cryst Bio Solutions Pvt. Ltd. — quality, turnaround times, and regulatory compliance.",
      keywords:
        "CRO client testimonials India, preclinical testing reviews, toxicology CRO feedback, biocompatibility testing client reviews, Cryst Bio Solutions Pvt. Ltd. testimonials",
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
      title: "Contact Cryst Bio Solutions Pvt. Ltd. | Request a Preclinical Study Quote",
      description:
        "Contact Cryst Bio Solutions Pvt. Ltd. — NABL & IAS accredited preclinical CRO in Pune, India. Request a quote for toxicology, biocompatibility, agrochemical testing, or laboratory animal supply.",
      keywords:
        "contact preclinical CRO India, request toxicology quote Pune, biocompatibility testing quote, Cryst Bio Solutions Pvt. Ltd. contact, CRO Pune contact, preclinical study enquiry India",
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
          description:
            "Contact us to request a quote for toxicology testing, biocompatibility studies, agrochemical testing, or laboratory animal supply.",
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
      title: "FAQs | Preclinical Testing & CRO Services India | Cryst Bio Solutions Pvt. Ltd.",
      description:
        "Answers to common questions about preclinical testing services, GLP compliance, NABL accreditation, turnaround times, OECD guidelines, and laboratory animal supply at Cryst Bio Solutions Pvt. Ltd.",
      keywords:
        "preclinical CRO FAQ India, toxicology testing questions, biocompatibility FAQ, GLP compliance questions, NABL accredited lab FAQ, laboratory animal supply FAQ, OECD testing FAQ",
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
    upsertMetaByName("author", "Cryst Bio Solutions Pvt. Ltd.");
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
    upsertMetaByProperty("og:image:alt", "Cryst Bio Solutions Pvt. Ltd. — NABL & IAS Accredited Preclinical CRO, Pune, India");
    upsertMetaByProperty("og:locale", "en_IN");

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", seo.title);
    upsertMetaByName("twitter:description", seo.description);
    upsertMetaByName("twitter:image", imageUrl);
    upsertMetaByName("twitter:image:alt", "Cryst Bio Solutions Pvt. Ltd. — Preclinical CRO India");
    upsertMetaByName("twitter:site", "@crystbio");

    upsertCanonical(canonical);
    setJsonLd(seo.jsonLd);
  }, [pathname]);

  return null;
};

export default SEOManager;
