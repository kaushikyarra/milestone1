const cron = require("node-cron");
const orders = require("../models/orderModel");

const STATUS_SEQUENCE = ["Preparing", "Out for Delivery", "Delivered"];

exports.startStatusUpdater = () => {
  cron.schedule("*/1 * * * *", () => {
    const allOrders = orders.getAllOrders();

    allOrders.forEach((order) => {
      const currentIndex = STATUS_SEQUENCE.indexOf(order.status);
      if (currentIndex < STATUS_SEQUENCE.length - 1) {
        orders.updateOrderStatus(order.id, STATUS_SEQUENCE[currentIndex + 1]);
      }
    });
  });

  console.log("Order status updater started (runs every minute)");
};
 