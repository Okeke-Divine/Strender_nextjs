import { NextResponse } from "next/server";
import prisma from "@/db";

export const POST = async (req: Request, res: Response) => {
  try {
    const { name, img_url, token } = await req.json();
    if (!name || !img_url || !token) {
      return NextResponse.json({ message: "Invalid fields" }, { status: 400 });
    }
    console.log(name,img_url,token);
    if (token !== process.env.AUTH_TOKEN) {
      return NextResponse.json({ message: "Invalid token" }, { status: 400 });
    }
    const category = await prisma.category.create({
      data: {
        name,
        img_url,
      },
    });
    if (category) {
      return NextResponse.json(
        { message: "Success fully created", data: category },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "An error occured" },
        { status: 500 }
      );
    }
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 500 });
  }
};

export const GET = async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany();
  return NextResponse.json({ message: "Ok", data: categories }, { status: 200 });
};
