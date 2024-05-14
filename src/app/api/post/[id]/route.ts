import prisma from "@/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  const post_id = 1;

  const post = await prisma.post.findUnique({ where: { id: post_id } });
  if (post) {
    return NextResponse.json(
      { message: "Success", data: post },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "Post does not exist" },
      { status: 404 }
    );
  }
};
