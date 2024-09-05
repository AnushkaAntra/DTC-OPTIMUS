import Driver from "@/database/models/driver.model";
import { connectToDatabase } from "@/database/mongoose";
import { NextResponse } from "next/server";

export const GET = async (req: Request & { id: string }, res: Response) => {
  try {
    await connectToDatabase();
    const requestData = await req.json();
    console.log(requestData.id);
    const routeData = await Driver.findById({_id: req.id});
    return new NextResponse(JSON.stringify(routeData), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: (error as Error).message }),
      {
        status: 500,
      }
    );
  }
};
