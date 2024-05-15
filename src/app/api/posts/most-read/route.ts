import { NextResponse } from "next/server";
import { generateSlug, generateRandomString } from "@/utils/shared/base";
import prisma from "@/db";

export const GET = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany({
    orderBy: {
        total_views: "desc"
    },
    take: 4
  });
  return NextResponse.json(
    { message: "Success", data: posts },
    { status: 200 }
  );
};
