import prisma from "@/db";
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
//   const { id } = params;
  const { searchParams } = new URL(request.url);
  const id:any = searchParams.get("category_id");
  console.log(searchParams,id);

  // Pagination parameters
  const page = parseInt(searchParams.get('page') || '1', 10); // Default to page 1
  const limit = parseInt(searchParams.get('limit') || '30', 10); // Default to 10 posts per page
  const skip = (page - 1) * limit;

  try {
    // Fetch posts with pagination and sorting
    const posts = await prisma.post.findMany({
      where: {
        categoryId: id,
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip: skip,
      take: limit,
    });

    // Count total posts under this category for pagination
    const totalPosts = await prisma.post.count({
      where: {
        categoryId: id,
      },
    });

    // Calculate total pages
    const totalPages = Math.ceil(totalPosts / limit);

    return NextResponse.json({
      success: true,
      data: {
        posts,
        totalPosts,
        totalPages,
        currentPage: page,
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch posts" }, { status: 500 });
  }
}
