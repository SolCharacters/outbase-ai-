import type { MetadataRoute } from "next";

const paths = [
  "",
  "/agents",
  "/product",
  "/use-cases",
  "/pricing",
  "/docs",
  "/developers",
  "/about",
  "/blog",
  "/careers",
  "/brand",
  "/contact",
  "/security",
  "/status",
  "/privacy",
  "/terms",
  "/cookies",
  "/acceptable-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `https://outbase.in${path}`,
    lastModified: new Date("2026-08-17"),
  }));
}
