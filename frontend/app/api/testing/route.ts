import Conductor from "@/database/models/conductor.model";
import Crew from "@/database/models/crew.model";
import { connectToDatabase } from "@/database/mongoose";
import { crewMockData } from "@/lib/mock.data";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  try {
    await connectToDatabase();
    const crewsData = await Crew.find()
      .populate("driver")
      .populate("conductor")
      .populate("route_id");

    return new NextResponse(JSON.stringify(crewsData), {
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

export const POST = async (req: Request, res: Response) => {
  try {
    await connectToDatabase();

    const body = await req.json();
    const crewsData = await Crew.create({
      driver: body.driver,
      conductor: body.conductor,
      route_id: body.route_id,
      rooster_id: body.rooster_id,
      rooster_bus_id: body.rooster_bus_id,
      schedule: body.schedule,
      status: body.status,
    });

    return new NextResponse(JSON.stringify(crewsData), {
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
