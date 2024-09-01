import { model, models, Schema } from "mongoose";

const ConductorSchema = new Schema({
  driver_name: {
    type: String,
  },
  ph_no: Number,
  address: String,
  status: {
    type: String,
    enum: ["available", "unavailable"],
    default: "available",
  },
});

const Conductor = models.Conductor || model("Conductor", ConductorSchema);

export default Conductor;