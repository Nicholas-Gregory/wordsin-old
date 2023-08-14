const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const EquipmentInventory = require('./EquipmentInventory');
const Effect = require('./Effect');

class Equipment extends Model {}

Equipment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    effectId: {
        type: DataTypes.INTEGER,
        references: {
            model: Effect,
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    modelName: 'Equipment'
});

module.exports = Equipment;