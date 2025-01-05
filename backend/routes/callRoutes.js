const express = require("express");
const { getTodaysCallLeads } = require("../controllers/callPlanningController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/today", authMiddleware, getTodaysCallLeads);

module.exports = router;
