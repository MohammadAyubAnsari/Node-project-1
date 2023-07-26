const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Expense = sequelize.define("expense", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  price: Sequelize.INTEGER,
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
});

module.exports = Expense;
