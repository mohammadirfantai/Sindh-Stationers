# Sindh Stationers

## Development

- `npm run dev` starts the Next.js development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` checks the project.

## Search engine setup

- The canonical site URL is `https://sindhstationers.com/`.
- The Next.js Metadata API and JSON-LD are configured in `src/app/layout.jsx` and `src/app/StructuredData.jsx`.
- The sitemap and crawler rules are served at `/sitemap.xml` and `/robots.txt`.
- The browser icon uses the existing horizontal SVG logo. An Apple touch icon is not set because the project has no suitable square raster logo asset.
- The web manifest is served at `/manifest.webmanifest` and reuses the existing SVG logo.
- The social preview image is pending. After `public/og-image.jpg` is provided, add it to both the `openGraph.images` and `twitter.images` fields in `src/app/layout.jsx`.
- Search Console verification is pending. After Google provides the real token, add `verification: { google: "REAL_TOKEN" }` to the metadata export in `src/app/layout.jsx`; do not commit a placeholder value.
- After deployment, verify the domain in Google Search Console, submit `https://sindhstationers.com/sitemap.xml`, and review indexing. Google Analytics is not configured. Deploying to Vercel, connecting the domain, and testing the live site remain manual tasks.
