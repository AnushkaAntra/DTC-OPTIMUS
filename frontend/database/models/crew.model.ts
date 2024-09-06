import mongoose, { model, models, mongo, Schema } from "mongoose";

const CrewSchema = new Schema(
  {
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Driver",
    },
    conductor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Conductor",
    },
    route_id: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      ref: "Route",
    },
    rooster_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    rooster_bus_id: {
      type: String,
      required: true,
    },
    schedule: {
      type: [Number],
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Crew = models.Crew || model("Crew", CrewSchema);

export default Crew;
