// const express = require("express");
// const {
//   placeOrder, // Ensure this matches the export in orderController.js
//   getOrderDetails,
// } = require("../controllers/orderController");

// const router = express.Router();

// router.post("/", placeOrder); // Check this line
// router.get("/:id", getOrderDetails);

// module.exports = router;


const orders = require("../models/orderModel");
const menu = require("../models/menuModel");

exports.placeOrder = (req, res) => {
  const { itemIds } = req.body;

  if (!itemIds || !Array.isArray(itemIds) || itemIds.length === 0) {
    return res.status(400).json({ status: "error", error: "Invalid items" });
  }

  const invalidItems = itemIds.filter((id) => !menu.itemExists(id));
  if (invalidItems.length > 0) {
    return res.status(400).json({ status: "error", error: "Invalid item IDs" });
  }

  const newOrder = orders.createOrder(itemIds);
  res.status(201).json({ status: "success", data: newOrder });
};

exports.getOrderDetails = (req, res) => {
  const order = orders.getOrder(req.params.id);
  if (!order) {
    return res.status(404).json({ status: "error", error: "Order not found" });
  }

  res.status(200).json({ status: "success", data: order });
};
