import { NextResponse } from "next/server";
import { generateSlug, generateRandomString } from "@/utils/shared/base";
import prisma from "@/db";

export const GET = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany({
    orderBy: {
    },
    take: 6
  });
  return NextResponse.json(
    { message: "Success", data: posts },
    { status: 200 }
  );
};
