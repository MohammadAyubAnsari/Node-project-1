const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-test", "root", "Ayub@#2022", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
