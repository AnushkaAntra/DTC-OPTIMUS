import { model, models, Schema } from "mongoose";

const BusSchema = new Schema(
  {
    licence_plate: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Bus = models.Bus || model("Bus", BusSchema);

export default Bus;
