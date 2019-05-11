module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });

    User.associate = function(models) {
        User.hasMany(models.Stocks, {
            onDelete: "cascade"
        });
    }

    return User;
}