const mongoose = require("mongoose");

const pocSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  name: String,
  role: String,
  contactInfo: {
    email: String,
    phone: String,
  },
});

module.exports = mongoose.model("POC", pocSchema);
