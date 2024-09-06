"use server";

import Commuter from "@/database/models/commuter.model";
import { connectToDatabase } from "@/database/mongoose";
import { handleError } from "../utils";

export async function getCommuters() {
  try {
    await connectToDatabase();

    const commuters = await Commuter.find();

    return JSON.parse(JSON.stringify(commuters));
  } catch (error) {
    handleError(error);
  }
}

export async function createCommutersData(commuterData: any) {
  try {
    await connectToDatabase();
    const commuter = new Commuter(commuterData);
    await commuter.save();
    return JSON.parse(JSON.stringify(commuter));
  } catch (error) {
    handleError(error);
  }
}