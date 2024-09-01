import { model, models, Schema } from "mongoose";

const RoosterSchema = new Schema(
  {
    data: {
      type: Object,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Rooster = models.Rooster || model("Rooster", RoosterSchema);

export default Rooster;