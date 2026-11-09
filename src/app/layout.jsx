import "../index.css";
import darkLogo from "../assets/logos/Sindh Stationers Logo (Dark).svg";
import StructuredData from "./StructuredData";

const siteUrl = new URL("https://sindhstationers.com/");
const pageTitle = "Sindh Stationers | Packing Tape Supplier in Karachi";
const pageDescription =
  "Buy quality packing tape in Karachi from Sindh Stationers. Explore Scotch tape, masking tape, double-sided tape and stretch film rolls. Ask for current prices on WhatsApp.";

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
    icon: [{ url: darkLogo.src, type: "image/svg+xml" }],
  },
  openGraph: {
    title: pageTitle,
    description:
      "Quality packing tape and packaging supplies for homes, shops, businesses, and online sellers across Karachi. Ask for current prices on WhatsApp.",
    url: "https://sindhstationers.com/",
    siteName: "Sindh Stationers",
    locale: "en_PK",
    type: "website",
    // Add images: ["/og-image.jpg"] after that image exists in public/.
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description:
      "Quality packing tape and packaging supplies for homes, shops, businesses, and online sellers across Karachi. Ask for current prices on WhatsApp.",
    // Add images: ["/og-image.jpg"] after that image exists in public/.
  },
  // Add verification.google here only after receiving the real Search Console token.
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
