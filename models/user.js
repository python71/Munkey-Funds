var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    goal: {
      type: DataTypes.STRING,
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Stocks, {
      onDelete: "cascade"
    });
  }

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  // User.hook("beforeCreate", function (user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  // });
  return User;
}