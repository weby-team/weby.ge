import type { MetadataRoute } from "next";
import { normalizedSiteUrl, siteDescription, siteName } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: normalizedSiteUrl,
    name: siteName,
    short_name: siteName,
    description: siteDescription,
    start_url: "/en",
    scope: "/",
    display: "standalone",
    background_color: "#0b0d10",
    theme_color: "#0b0d10",
    icons: [
      {
        src: "/images/favicon.jpg",
        sizes: "1080x1080",
        type: "image/jpeg",
      },
    ],
  };
}
