import { NextResponse } from "next/server"

export const POST = async (req:Request,res:Response) => {
    try{
        const {title,categoryId,img_url,summary,content,tags} = await req.json();
        const slug = "";
    }catch(e){
        NextResponse.json({message:e},{status:500})
    }
}

export const GET = async (req:Request,res:Response) => {
    return NextResponse.json({message:"Okay"},{status:200})
}