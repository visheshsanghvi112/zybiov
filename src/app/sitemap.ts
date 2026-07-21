import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.zybiov.com";

  const routes = ["", "/about", "/contact", "/expertise", "/reviews", "/privacy-policy"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}${route}`,
        ar: `${baseUrl}${route}`,
      },
    },
  }));
}
