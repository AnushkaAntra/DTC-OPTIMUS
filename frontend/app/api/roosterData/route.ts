import Rooster from "@/database/models/rooster.model";
import { connectToDatabase } from "@/database/mongoose";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    const result = await fetch("http://localhost:5000/getSchedule");
    if (!result) {
      throw new Error("No data found");
    }
    const data = await result.json();

    await connectToDatabase();
    const roosterData = await Rooster.create({data});

    return new NextResponse(JSON.stringify("data saved successfully to database"), {
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
