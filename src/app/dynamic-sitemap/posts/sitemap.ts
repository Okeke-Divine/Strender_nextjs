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
  const posts = await prisma.post.findMany({
    select: {
      slug: true,
      createdAt:true
    },
  });

  const sitemap_posts = posts.map(({ slug,createdAt }) => ({
    url: `${NEXT_PUBLIC_BASE_URL}/post/`+slug,
    lastModified: createdAt,
    changeFrequency: changeFrequency,
  }));

  return [...sitemap_posts];
}
