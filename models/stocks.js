
module.exports = function (sequelize, DataTypes) {
  var Stocks = sequelize.define("Stocks", {
    ticker: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    shares: {
      type: DataTypes.INTEGER,
    },
    ownerId: {
      type: DataTypes.INTEGER
    }
  })

  Stocks.associate = function (models) {
    Stocks.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Stocks;
}
