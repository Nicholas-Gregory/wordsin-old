const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Action extends Model {}

Action.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'Action'
});

module.exports = Action;