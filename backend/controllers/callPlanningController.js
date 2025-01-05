const Restaurant = require("../models/restaurantModel");
const Interaction = require("../models/interactionModel");

// Fetch Leads Requiring Calls Today
exports.getTodaysCallLeads = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Fetch all leads managed by the logged-in KAM
    const leads = await Restaurant.find({ createdBy: req.user.id });

    const leadsRequiringCalls = [];

    for (const lead of leads) {
      // Check the most recent interaction
      const lastInteraction = await Interaction.findOne({
        restaurantId: lead._id,
      }).sort({ interactionDate: -1 });

      if (
        !lastInteraction ||
        today - lastInteraction.interactionDate > 7 * 24 * 60 * 60 * 1000
      ) {
        leadsRequiringCalls.push(lead);
      }
    }

    res.json(leadsRequiringCalls);
  } catch (error) {
    res.status(500).json({ message: "Error fetching call planning data" });
  }
};
