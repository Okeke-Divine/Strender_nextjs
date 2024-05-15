import prisma from "@/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
      const { pathname } = new URL(req.url);
      console.log(pathname);

      const id = pathname.substring("/api/post/".length); 

    const post = await prisma.post.findUnique({ where: { id: id } });
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
  } catch (e) {
    return NextResponse.json(
      { message: "An error occured. Details: " + e },
      { status: 500 }
    );
  }
};
