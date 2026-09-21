import { siteConfig } from "@/config/site-config";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Bakery", "LocalBusiness"],
    "name": siteConfig.name,
    "alternateName": siteConfig.legalName,
    "description": siteConfig.description,
    "url": "https://www.padariagustmann.com.br",
    "logo": "https://www.padariagustmann.com.br/images/logo.jpg",
    "image": "https://www.padariagustmann.com.br/images/logo.jpg",
    "telephone": "+551936457977",
    "email": siteConfig.contacts.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${siteConfig.address.street}, ${siteConfig.address.number} - ${siteConfig.address.neighborhood}`,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.state,
      "postalCode": siteConfig.address.cep,
      "addressCountry": "BR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.7666,
      "longitude": -47.3323,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "06:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "06:30",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      siteConfig.contacts.instagramUrl,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
