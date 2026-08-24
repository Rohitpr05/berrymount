import type { MetadataRoute } from "next";
import { berries } from "@/data/berries";

const baseUrl = "https://www.berrymount.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/berries", "/wholesale", "/quality", "/contact", "/privacy", "/terms"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    }),
  );

  const berryRoutes = berries.map((b) => ({
    url: `${baseUrl}/berries/${b.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...berryRoutes];
}
