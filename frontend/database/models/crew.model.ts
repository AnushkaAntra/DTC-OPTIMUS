import mongoose, { model, models, Schema } from "mongoose";

const CrewSchema = new Schema({
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  conductor: {
    type: mongoose.Schema.Types.ObjectId,
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
    type: String,
    enum: ["available", "unavailable"],
    default: "available",
    required: true,
  },
}, {
  timestamps: true,
});

const Crew = models.Crew || model("Crew", CrewSchema);

export default Crew;