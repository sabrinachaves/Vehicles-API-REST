const { DataType, DataTypes, Model } = require("sequelize");
const sequelize = require("../infra/dbSequelize");

const VehicleModel = sequelize.define("Vehicle", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, 
{
    createdAt: false,
    updatedAt: false,
    tableName: "vehicles"
});

module.exports = VehicleModel;