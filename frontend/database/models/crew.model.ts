import mongoose, { model, models, mongo, Schema } from "mongoose";

const CrewSchema = new Schema({
  driver_name: {
    type: String,
    required: true,
  },
  conductor_name: {
    type: String,
    required: true,
  },
  route_id: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
  },
  rooster_id: {
    type: String,
    required: true,
  },
  status: {
    enum: ["available", "unavailable"],
    required: true,
  },
}, {
  timestamps: true,
});

const Crew = models.Crew || model("Crew", CrewSchema);

export default Crew;