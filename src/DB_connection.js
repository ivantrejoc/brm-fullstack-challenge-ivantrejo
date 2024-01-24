require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const UserModel = require("./models/User");
const ProductModel = require("./models/Product");
const PurchaseModel = require("./models/Purchase");
const PurchaseItemModel = require("./models/PurchaseItem");

// Option 3: Passing parameters separately (other dialects) mysql
const sequelize = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: `${DB_HOST}`,
  dialect: "mysql",
  port: `${DB_PORT}`
});

//testing connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();

UserModel(sequelize);
ProductModel(sequelize);
PurchaseModel(sequelize);
PurchaseItemModel(sequelize);

const { User, Product, Purchase, PurchaseItem } = sequelize.models;

//Relations
User.hasMany(Purchase, {foreignKey: "idUser", sourceKey: "id"});
Purchase.belongsTo(User, {foreignKey: "idUser", targetKey: "id"});

Purchase.hasMany(PurchaseItem, { foreignKey: "idPurchase", sourceKey: "invoice"});
PurchaseItem.belongsTo(Purchase, { foreignKey: "idPurchase", targetKey: "invoice"});
PurchaseItem.belongsTo(Product, { foreignKey: "idProduct", targetKey: "id"});

module.exports = {
  User,
  Product,
  Purchase,
  PurchaseItem,
  conn: sequelize
};
