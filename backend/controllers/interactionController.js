const Interaction = require("../models/interactionModel");

// Record an Interaction
exports.addInteraction = async (req, res) => {
  try {
    const {
      restaurantId,
      interactionType,
      interactionDetails,
      interactionDate,
    } = req.body;
    const newInteraction = new Interaction({
      restaurantId,
      interactionType,
      interactionDetails,
      interactionDate,
    });
    await newInteraction.save();
    res.status(201).json(newInteraction);
  } catch (error) {
    res.status(500).json({ message: "Error recording interaction" });
  }
};

// Fetch Interactions for a Restaurant
exports.getInteractions = async (req, res) => {
  try {
    const interactions = await Interaction.find({
      restaurantId: req.params.restaurantId,
    });
    res.json(interactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching interactions" });
  }
};
