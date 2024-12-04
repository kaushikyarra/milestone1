const menuItems = [];
let nextId = 1;

exports.addItem = (name, price, category) => {
  const newItem = { id: nextId++, name, price, category };
  menuItems.push(newItem);
  return newItem;
};

exports.getItems = () => menuItems;

exports.itemExists = (id) => menuItems.some((item) => item.id === id);
