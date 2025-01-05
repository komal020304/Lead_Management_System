const Restaurant = require("../models/restaurantModel");

// Fetch all restaurants (GET /api/restaurants)
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error fetching restaurants" });
  }
};

// Add a new restaurant (POST /api/restaurants)
const addRestaurant = async (req, res) => {
  const { name, address, leadStatus, createdBy, updatedAt } = req.body;
  try {
    const newRestaurant = new Restaurant({
      name,
      address,
      leadStatus,
      createdBy,
      updatedAt,
    });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ message: "Error adding restaurant" });
  }
};

module.exports = { getRestaurants, addRestaurant };
