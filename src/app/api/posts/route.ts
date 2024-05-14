import { NextResponse } from "next/server"

export const GET = async (req:Request,res:Response) => {
    return NextResponse.json({},{status:200})
}