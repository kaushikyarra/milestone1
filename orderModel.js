const orders = [];
let nextId = 1;

exports.createOrder = (itemIds) => {
  const newOrder = {
    id: nextId++,
    itemIds,
    status: "Preparing",
  };
  orders.push(newOrder);
  return newOrder;
};

exports.getOrder = (id) => orders.find((order) => order.id === parseInt(id));

exports.updateOrderStatus = (id, status) => {
  const order = this.getOrder(id);
  if (order) order.status = status;
};

exports.getAllOrders = () => orders;
