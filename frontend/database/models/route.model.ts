import { model, models, Schema } from "mongoose";

const RouteSchema = new Schema(
  {
    route_id: {
      type: String,
      required: true,
      unique: true,
    },
    route_name: {
      type: String,
    },
    starting_point: {
      type: Number,
      required: true,
    },
    ending_point: {
      type: Number,
      required: true,
    },
    stops: {
      type: [Number],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Route = models.Route || model("Route", RouteSchema);

export default Route;
