"use server";

import Rooster from "@/database/models/rooster.model";
import { connectToDatabase } from "@/database/mongoose";
import { handleError } from "../utils";

export async function getRoostersForToday() {
  try {
    await connectToDatabase();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Get the start and end of today's date
    const startOfDay = today;
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    // Find a rooster created on today's date
    const rooster = await Rooster.findOne({
      createdAt: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    if (!rooster) {
      throw new Error("Rooster not found");
    }
    return JSON.parse(JSON.stringify(rooster));
  } catch (error) {
    handleError(error);
  }
}
