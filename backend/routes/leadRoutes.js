const express = require("express");
const {
  addLead,
  getLeads,
  updateLead,
} = require("../controllers/leadController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, addLead);
router.get("/", authMiddleware, getLeads);
router.put("/:id", authMiddleware, updateLead);

module.exports = router;
