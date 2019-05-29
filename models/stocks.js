
module.exports = function (sequelize, DataTypes) {
  var Stocks = sequelize.define("Stocks", {
    stock: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shares: {
      type: DataTypes.INTEGER,
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