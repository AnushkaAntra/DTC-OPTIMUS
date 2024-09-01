"use server";

import Driver from "@/database/models/driver.model";
import { connectToDatabase } from "@/database/mongoose";
import { handleError } from "../utils";

export async function getAllDrivers() {
  try {
    await connectToDatabase();
    const drivers = await Driver.find();
    return JSON.parse(JSON.stringify(drivers));
  } catch (error) {
    handleError(error);
  }
}

export async function getDriverById(driver_id: string) {
  try {
    await connectToDatabase();
    const driver = await Driver.findOne({ driver_id });
    if (!driver) {
      throw new Error("Driver not found");
    }
    return JSON.parse(JSON.stringify(driver));
  } catch (error) {
    handleError(error);
  }
}

export async function getDriverByAvailability() {
  try {
    await connectToDatabase();
    const driver = await Driver.find({ availability: "available" });
    
    return JSON.parse(JSON.stringify(driver));
  } catch (error) {
    handleError(error);
  }
}
export async function createDriver(driverData: any) {
  try {
    await connectToDatabase();
    const driver = new Driver(driverData);
    await driver.save();
    return JSON.parse(JSON.stringify(driver));
  } catch (error) {
    handleError(error);
  }
}

export async function updateDriver(driver_id: string, driverData: any) {
  try {
    await connectToDatabase();
    const driver = await Driver.findOneAndUpdate({ driver_id }, driverData, {
      new: true,
    });
    if (!driver) {
      throw new Error("Driver not found");
    }
    return JSON.parse(JSON.stringify(driver));
  } catch (error) {
    handleError(error);
  }
}

export async function deleteDriver(driver_id: string) {
  try {
    await connectToDatabase();
    const driver = await Driver.findOneAndDelete({ driver_id });
    if (!driver) {
      throw new Error("Driver not found");
    }
    return JSON.parse(JSON.stringify(driver));
  } catch (error) {
    handleError(error);
  }
}
