import { siteConfig } from "@/config/site-config";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Bakery", "LocalBusiness"],
    "name": siteConfig.name,
    "alternateName": siteConfig.legalName,
    "description": siteConfig.description,
    "url": "https://www.padariagustmann.com.br",
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
