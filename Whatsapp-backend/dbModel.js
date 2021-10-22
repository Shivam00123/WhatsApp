import mongoose from "mongoose";

const instances = mongoose.Schema({
  message: String,
  name: String,
  timeStamp: String,
  received: Boolean,
});

export default mongoose.model("messagecontent", instances);
