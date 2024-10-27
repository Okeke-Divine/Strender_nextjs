import prisma from "@/db";
import { NEXT_PUBLIC_BASE_URL } from "@/constants/shared/constant";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try{
        const posts = await prisma.post.findMany({
            select: {
                slug: true,
                createdAt: true
            },
        });
    
        let urls:any = [];
    
        posts.forEach(post => {
            urls.push(
                {
                    url: `${NEXT_PUBLIC_BASE_URL}/post/` + post.slug,
                }
            );
        });
    
        return NextResponse.json(
            urls,
            { status: 200 }
        );
    }catch(e){
        console.log(e);
        return NextResponse.json(
            { message: "Internal server error", data: [] },
            { status: 500 }
        );
    }
}