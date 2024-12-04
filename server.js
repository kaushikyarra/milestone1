const express = require("express");
const bodyParser = require("body-parser");
const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/orders");
const { startStatusUpdater } = require("./utils/statusUpdater");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/menu", menuRoutes);
app.use("/orders", orderRoutes);

// Start the status updater (CRON job)
startStatusUpdater();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
