const express = require("express");
const {
  addInteraction,
  getInteractions,
} = require("../controllers/interactionController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, addInteraction); // Record an interaction
router.get("/:restaurantId", authMiddleware, getInteractions); // Fetch all interactions for a lead

module.exports = router;
