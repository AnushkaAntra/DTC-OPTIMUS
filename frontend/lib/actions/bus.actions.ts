import { connectToDatabase } from "@/database/mongoose";
import Bus from "@/database/models/bus.models";
import { handleError } from "../utils";

export async function getAllBus() {
  try {
    await connectToDatabase();
    const buses = await Bus.find();
    return JSON.parse(JSON.stringify(buses));
  } catch (error) {
    handleError(error);
  }
}

export async function getBusById(id: string) {
  try {
    await connectToDatabase();
    const bus = await Bus.findById(id);
    return JSON.parse(JSON.stringify(bus));
  } catch (error) {
    handleError(error);
  }
}

export async function getBusByLicense(id: String) {
  try {
    await connectToDatabase();
    const bus = await Bus.findOne({ licence_plate: id });
    return JSON.parse(JSON.stringify(bus));
  } catch (error) {
    handleError(error);
  }
}

export async function createBusData(busData: any) {
  try {
    await connectToDatabase();
    const bus = new Bus(busData);
    await bus.save();
    return JSON.parse(JSON.stringify(bus));
  } catch (error) {
    handleError(error);
  }
}

export async function updateBusData(id: string, busData: any) {
  try {
    await connectToDatabase();
    const bus = await Bus.findByIdAndUpdate(id, busData, { new: true });
    return JSON.parse(JSON.stringify(bus));
  } catch (error) {
    handleError(error);
  }
}
