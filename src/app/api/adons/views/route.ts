import { getTotalViews } from "@/store";
import { NextResponse } from "next/server";

export const GET = (req: Request, res: Response) => {
  return NextResponse.json({ total_views: getTotalViews() }, { status: 200 });
};
