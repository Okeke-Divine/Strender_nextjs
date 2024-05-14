import { NextResponse } from "next/server";
import { generateSlug, generateRandomString } from "@/utils/shared/base";
import prisma from "@/db";

export const POST = async (req: Request, res: Response) => {
  try {
    const { title, categoryId, img_url, summary, content, tags, token } =
      await req.json();
    if (
      !title ||
      !categoryId ||
      !img_url ||
      !summary ||
      !content ||
      !tags ||
      !token
    ) {
      return NextResponse.json({ message: "Invalid fields" }, { status: 400 });
    }
    if (token !== process.env.AUTH_TOKEN) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!category || category === null || category === undefined) {
      return NextResponse.json(
        { message: "Category does not exist" },
        { status: 400 }
      );
    }

    const slugBase = generateSlug(title);
    const randomString = generateRandomString(6);
    const slug = `${slugBase}-${randomString}`;

    const post = await prisma.post.create({
      data: {
        categoryId: categoryId,
        title: title,
        img_url: img_url,
        author: "Admin",
        summary: summary,
        content: content,
        slug: slug,
        tags: tags,
      },
    });

    if (category) {
        return NextResponse.json(
          { message: "Success fully created", data: post },
          { status: 201 }
        );
      } else {
        return NextResponse.json(
          { message: "An error occured" },
          { status: 500 }
        );
      }
  } catch (e) {
    return NextResponse.json({ message: "Error: " + e }, { status: 500 });
  }
};

export const GET = async (req: Request, res: Response) => {
  return NextResponse.json({ message: "Okay" }, { status: 200 });
};
