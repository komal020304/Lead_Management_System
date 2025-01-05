const express = require("express");
const { addPOC, getPOCs, deletePOC } = require("../controllers/pocController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, addPOC);
router.get("/:restaurantId", authMiddleware, getPOCs);
router.delete("/:id", authMiddleware, deletePOC);

module.exports = router;
