"use server";

import Crew from "@/database/models/crew.model";
import { handleError } from "../utils";
import { connectToDatabase } from "@/database/mongoose";
import { crewBinding } from "../functions";
import { getDriverByAvailability } from "./driver.actions";
import { getConductorByAvailability } from "./conductor.actions";
import { getRoostersForToday } from "./rooster.actions";
import { getRoutes } from "./route.actions";

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

export async function assignCrew() {
  const drivers = await getDriverByAvailability();
  const conductors = await getConductorByAvailability();
  const rooster = await getRoostersForToday();
  const route = await getRoutes();

  let routes = [];
  for (let i = 0; i < 10; i++) {
    routes.push(route._id);
  }

  console.log(routes)
  const crew = crewBinding(drivers, conductors, rooster, routes);
  try {
    await connectToDatabase();
    await Crew.insertMany(crew);
    return JSON.parse(JSON.stringify(crew));
  } catch (error) {
    handleError(error);
  }
}
