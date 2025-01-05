const express = require("express");
const {
  getRestaurants,
  addRestaurant,
} = require("../controllers/restaurantController");
const router = express.Router();

router.get("/", getRestaurants); // Fetch all leads
router.post("/", addRestaurant); // Add a new lead

module.exports = router;
