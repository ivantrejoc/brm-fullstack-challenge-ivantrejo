const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      batch: {
        type: DataTypes.STRING,
        allowNull: false
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT(11, 2),
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      receiptDate: {
        type: DataTypes.DATE,
        defaultValue: Date.now
      }
    },
    { timestamps: false }
  );
};
