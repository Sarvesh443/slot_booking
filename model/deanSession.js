const mongoose = require("mongoose");

const DeanSessionSchema = new mongoose.Schema({
  slot: {
    type: Number,
    required: true,
    enum: [1, 2] // Only allow values 1 or 2
  },
  day: {
    type: String,
    required: true,
    enum: ['THURSDAY', 'FRIDAY'] // Only allow THURSDAY or FRIDAY
  },
  status: {
    type: String,
    required: true,
    enum: ['available', 'booked'] // Example values, adjust as needed
  }
});

const Session = mongoose.model("session", DeanSessionSchema);
module.exports = Session; 