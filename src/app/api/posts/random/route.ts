import { NextResponse } from "next/server";
import { generateSlug, generateRandomString } from "@/utils/shared/base";
import prisma from "@/db";

export const GET = async (req: Request, res: Response) => {
  const randomPick = (array: any) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const _orderBy: any = randomPick(["id", "title","categoryId","img_url","slug","author","summary","content","createdAt","tags","total_views"]);
  const _orderDir = randomPick(["asc", "desc"]);

  const posts = await prisma.post.findMany({
    orderBy: { [_orderBy]: _orderDir },
    take: 6,
  });
  return NextResponse.json(
    { message: "Success", data: posts },
    { status: 200 }
  );
};
