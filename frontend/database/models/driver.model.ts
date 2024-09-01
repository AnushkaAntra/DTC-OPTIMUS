import { model, models, Schema } from "mongoose";

const DriverSchema = new Schema({
  driver_name: {
    type: String,
  },
  ph_no: Number,
  address: String,
  license_no: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["available", "unavailable"],
    default: "available",
  },
});

const Driver = models.Driver || model("Driver", DriverSchema);

export default Driver;