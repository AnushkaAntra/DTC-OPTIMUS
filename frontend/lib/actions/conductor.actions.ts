"use server";

import Conductor from "@/database/models/conductor.model";
import { connectToDatabase } from "@/database/mongoose";
import { handleError } from "../utils";

export async function getAllConductors() {
  try {
    await connectToDatabase();
    const conductors = await Conductor.find();
    return JSON.parse(JSON.stringify(conductors));
  } catch (error) {
    handleError(error);
  }
}

export async function getConductorById(conductor_id: string) {
  try {
    await connectToDatabase();
    const conductor = await Conductor.findOne({ conductor_id });
    if (!conductor) {
      throw new Error("Conductor not found");
    }
    return JSON.parse(JSON.stringify(conductor));
  } catch (error) {
    handleError(error);
  }
}

export async function getConductorByAvailability() {
  try {
    await connectToDatabase();
    const conductors = await Conductor.find({ status: "available" });
    return JSON.parse(JSON.stringify(conductors));
  } catch (error) {
    handleError(error);
  }
}

export async function createConductor(conductorData: any) {
  try {
    await connectToDatabase();
    const conductor = new Conductor(conductorData);
    await conductor.save();
    return JSON.parse(JSON.stringify(conductor));
  } catch (error) {
    handleError(error);
  }
}

export async function updateConductor(conductor_id: string, conductorData: any) {
  try {
    await connectToDatabase();
    const conductor = await Conductor.findOneAndUpdate(
      { conductor_id },
      conductorData,
      {
        new: true,
      }
    );
    if (!conductor) {
      throw new Error("Conductor not found");
    }
    return JSON.parse(JSON.stringify(conductor));
  } catch (error) {
    handleError(error);
  }
}

