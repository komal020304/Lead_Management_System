const POC = require("../models/pocModel");

// Add POC
exports.addPOC = async (req, res) => {
  try {
    const { restaurantId, name, role, contactInfo } = req.body;
    const newPOC = new POC({ restaurantId, name, role, contactInfo });
    await newPOC.save();
    res.status(201).json(newPOC);
  } catch (error) {
    res.status(500).json({ message: "Error adding POC" });
  }
};

// Fetch POCs by Restaurant
exports.getPOCs = async (req, res) => {
  try {
    const pocs = await POC.find({ restaurantId: req.params.restaurantId });
    res.json(pocs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching POCs" });
  }
};

// Delete POC
exports.deletePOC = async (req, res) => {
  try {
    await POC.findByIdAndDelete(req.params.id);
    res.json({ message: "POC deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting POC" });
  }
};
