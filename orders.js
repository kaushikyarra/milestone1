const express = require("express");
const {
  placeOrder,
  getOrderDetails,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/", placeOrder);
router.get("/:id", getOrderDetails);

module.exports = router;
