const Restaurant = require("../models/restaurantModel");

// Add a New Lead
exports.addLead = async (req, res) => {
  try {
    const { name, address } = req.body;
    const newLead = new Restaurant({
      name,
      address,
      createdBy: req.user.id,
    });
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    res.status(500).json({ message: "Error adding lead" });
  }
};

// Fetch Leads by KAM
exports.getLeads = async (req, res) => {
  try {
    const leads = await Restaurant.find({ createdBy: req.user.id });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leads" });
  }
};

// Update Lead Status
exports.updateLead = async (req, res) => {
  try {
    const { leadStatus } = req.body;
    const updatedLead = await Restaurant.findByIdAndUpdate(
      req.params.id,
      { leadStatus },
      { new: true }
    );
    res.json(updatedLead);
  } catch (error) {
    res.status(500).json({ message: "Error updating lead" });
  }
};
