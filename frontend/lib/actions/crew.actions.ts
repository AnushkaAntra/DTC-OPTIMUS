"use server";

import Crew from "@/database/models/crew.model";
import { handleError } from "../utils";
import { connectToDatabase } from "@/database/mongoose";

export async function getAllCrews() {
  try {
    await connectToDatabase();
    const crews = await Crew.find()
      .populate("conductor")
      .populate("driver")
      .populate("route_id");
    return JSON.parse(JSON.stringify(crews));
  } catch (error) {
    handleError(error);
  }
}

export async function getCrewById(crew_id: string) {
  try {
    await connectToDatabase();
    const crew = await Crew.findOne({ crew_id })
      .populate("conductor")
      .populate("driver")
      .populate("route_id");
    if (!crew) {
      throw new Error("Crew not found");
    }
    return JSON.parse(JSON.stringify(crew));
  } catch (error) {
    handleError(error);
  }
}

export async function createCrew(crewData: any) {
  try {
    await connectToDatabase();

    const crew = new Crew(crewData);
    await crew.save();

    return JSON.parse(JSON.stringify(crew));
  } catch (error) {
    handleError(error);
  }
}

export async function updateCrew(crew_id: string, crewData: any) {
  try {
    await connectToDatabase();
    const crew = await Crew.findOneAndUpdate({ crew_id }, crewData, {
      new: true,
    });
    if (!crew) {
      throw new Error("Crew not found");
    }
    return JSON.parse(JSON.stringify(crew));
  } catch (error) {
    handleError(error);
  }
}
