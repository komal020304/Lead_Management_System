const mongoose = require("mongoose");

const interactionSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  interactionType: {
    type: String,
    enum: ["call", "meeting", "email"],
    required: true,
  },
  interactionDetails: String,
  interactionDate: { type: Date, default: Date.now },
  notes: String,
});

module.exports = mongoose.model("Interaction", interactionSchema);
