const menu = require("../models/menuModel");

exports.addMenuItem = (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price || !category || price <= 0) {
    return res.status(400).json({ status: "error", error: "Invalid input" });
  }

  const newItem = menu.addItem(name, price, category);
  res.status(201).json({ status: "success", data: newItem });
};

exports.getMenuItems = (req, res) => {
  res.status(200).json({ status: "success", data: menu.getItems() });
};
