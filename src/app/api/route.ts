import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const { searchParams } = new URL(req.url);
    console.log(searchParams.get("a"), searchParams.get("b"));
    return NextResponse.json({ mesage: "Hello world" });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
};

export const POST = async (req: Request, res: Response) => {
  try {
    var _response = "";
    const { key,token } = await req.json();
    const authToken = process.env.AUTH_TOKEN;

    if(token === authToken){
      _response = key;
    }else{
      _response = "Invalid Access token";
    }

    return NextResponse.json({ message: _response }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 200 });
  }
};
