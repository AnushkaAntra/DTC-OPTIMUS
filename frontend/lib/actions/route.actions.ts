"use server";
import Route from "@/database/models/route.model";
import { connectToDatabase } from "@/database/mongoose";
import { handleError } from "../utils";

export async function getRouteById(route_id: string) {
  try {
    await connectToDatabase();

    const route = await Route.findOne({ route_id });

    if (!route) {
      throw new Error("Route not found");
    }

    return JSON.parse(JSON.stringify(route));
  } catch (error) {
    handleError(error);
  }
}

export async function getRoutes() {
  try {
    await connectToDatabase();

    const routes = await Route.find();

    return JSON.parse(JSON.stringify(routes));
  } catch (error) {
    handleError(error);
  }
}

export async function createRoute(routeData: any) {
  try {
    await connectToDatabase();

    const route = new Route(routeData);
    await route.save();

    return JSON.parse(JSON.stringify(route));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteRouteById(route_id: string) {
  try {
    await connectToDatabase();

    const route = await Route.findOneAndDelete({ route_id });

    if (!route) {
      throw new Error("Route not found");
    }

    return JSON.parse(JSON.stringify(route));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteAllRoutes() {
  try {
    await connectToDatabase();

    const result = await Route.deleteMany();

    return result;
  } catch (error) {
    handleError(error);
  }
}
