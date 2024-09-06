import { model, models, Schema } from "mongoose";

const CommuterSchema = new Schema({
  time: {
    type: Object,
    required: true,
  },
});

const Commuter = models.Commuter || model("Commuter", CommuterSchema);

export default Commuter;