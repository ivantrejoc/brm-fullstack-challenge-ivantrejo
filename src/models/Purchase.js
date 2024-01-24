const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Purchase",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      invoice: {
        type: DataTypes.INTEGER,
        autoincrement: true,
        primaryKey: true,
        allowNull: false
      },
      purchaseDate: {
        type: DataTypes.DATE,
        defaultValue: Date.now
      },
      subtotal: {
        type: DataTypes.FLOAT(11, 10),
        defaultValue: 0,
      },
      taxes: {
        type: DataTypes.FLOAT(11, 10),
        defaultValue: 0,
      },
      totalPrice: {
        type: DataTypes.FLOAT(11, 10),
        allowNull: false
      }
    },
    { timestamps: false }
  );
};
