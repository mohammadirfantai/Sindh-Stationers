import darkLogo from "../assets/logos/Sindh Stationers Logo (Dark).svg";

const siteUrl = "https://sindhstationers.com/";

const karachiServiceArea = {
  "@type": "City",
  name: "Karachi",
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Sindh",
    containedInPlace: {
      "@type": "Country",
      name: "Pakistan",
    },
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Sindh Stationers",
      url: siteUrl,
      logo: new URL(darkLogo.src, siteUrl).toString(),
      telephone: "+92 300 2279528",
      email: "sindhstationers@gmail.com",
      description:
        "Packing tape and packaging supplies for homes, shops, businesses, and online sellers across Karachi, Pakistan.",
      areaServed: karachiServiceArea,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Sindh Stationers",
      inLanguage: "en-PK",
      publisher: { "@id": `${siteUrl}#organization` },
    },
  ],
};

export default function StructuredData() {
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
