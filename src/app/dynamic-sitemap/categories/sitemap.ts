import { MetadataRoute } from "next";
import prisma from "@/db";
import { NEXT_PUBLIC_BASE_URL } from "@/constants/shared/constant";

type ChangeFrequency =
  | "daily"
  | "always"
  | "hourly"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

const changeFrequency: ChangeFrequency = "daily";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const categories = await prisma.category.findMany({
    select: {
      name: true,
      
    },
  });

  const categories_posts = categories.map(({ name }) => ({
    url: `${NEXT_PUBLIC_BASE_URL}/category/`+name,
    lastModified: new Date().toISOString(),
    changeFrequency: changeFrequency,
  }));

  return [...categories_posts];
}
