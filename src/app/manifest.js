import darkLogo from "../assets/logos/Sindh Stationers Logo (Dark).svg";

export default function manifest() {
  return {
    name: "Sindh Stationers",
    short_name: "Sindh Stationers",
    description: "Packing tape supplier in Karachi, Pakistan.",
    start_url: "/",
    display: "browser",
    background_color: "#f5f1e8",
    theme_color: "#18352f",
    icons: [
      {
        src: darkLogo.src,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
