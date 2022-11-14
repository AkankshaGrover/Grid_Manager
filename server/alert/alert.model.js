const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: true },
        criteria: { type: DataTypes.STRING, allowNull: true },
        value: { type: DataTypes.INTEGER, allowNull: true },
        day: { type: DataTypes.STRING, allowNull: true },
        email: { type: DataTypes.STRING, allowNull: true },
        phone: { type: DataTypes.STRING, allowNull: true }
    };

    return sequelize.define('Alert', attributes);
}