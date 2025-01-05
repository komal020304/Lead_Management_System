const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  leadStatus: {
    type: String,
    enum: ["new", "in-progress", "converted"],
    default: "new",
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "KAM" },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
