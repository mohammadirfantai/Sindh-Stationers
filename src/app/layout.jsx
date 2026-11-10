import "../index.css";
import StructuredData from "./StructuredData";

const siteUrl = new URL("https://sindhstationers.com/");
const pageTitle = "Sindh Stationers | High Quality Packing Tape Supplier in Karachi";
const pageDescription =
  "Looking for packing tape in Karachi? Sindh Stationers supplies Scotch tape, double-sided tape, masking tape and stretch film rolls for shops, businesses and everyday use. Contact us on WhatsApp for current prices and available sizes.";

export const metadata = {
  metadataBase: siteUrl,
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://sindhstationers.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/Favicon.svg?v=2", type: "image/svg+xml" }],
  },
  openGraph: {
    title: pageTitle,
    description:
      "Quality packing tape and packaging supplies for homes, shops, businesses, and online sellers across Karachi. Ask for current prices on WhatsApp.",
    url: "https://sindhstationers.com/",
    siteName: "Sindh Stationers",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Sindh Stationers, a high-quality packing tape supplier in Karachi, Pakistan.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/og-image.jpg",
        alt: "Sindh Stationers, a high-quality packing tape supplier in Karachi, Pakistan.",
      },
    ],
  },
  // Add verification.google here only after receiving the real Search Console token.
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KLM5LM6K');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KLM5LM6K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
