import { NextResponse } from "next/server";
import prisma from "@/db";

export const GET = async (req: Request, res: Response) => {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query) {
        return NextResponse.json(
          { message: "Query parameter is missing" },
          { status: 400 }
        );
      }

    const posts = await prisma.post.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { slug: { contains: query } },
          { summary: { contains: query } },
          { content: { contains: query } },
          { tags: { contains: query } },
        ],
      },
    });
    return NextResponse.json(
      { message: "Success", data: posts },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 200 });
  }
};
