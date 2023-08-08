const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeanSession = new Schema({
  slot: { type: number, required: true },
  day: { type: String, required: true },
  status: { type: String, required: true }
});

const Session = mongoose.model("session", DeanSession);
module.exports = Session;