const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "PurchaseItem",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      amount: {
        type: DataTypes.FLOAT(11, 10),
        defaultValue: 0
      },
      unitPrice: {
        type: DataTypes.FLOAT(11, 10),
        defaultValue: 0
      },
      totalPrice: {
        type: DataTypes.FLOAT(11, 10),
        defaultValue: 0
      },
      idProduct: {
        type: DataTypes.UUID,
        allowNull: false
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
