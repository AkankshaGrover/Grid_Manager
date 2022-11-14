const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        cost: { type: DataTypes.INTEGER, allowNull: false },
        day: { type: DataTypes.INTEGER, allowNull: false}
    };
    return sequelize.define('Power', attributes);
}