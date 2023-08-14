const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const EquipmentInventory = require('./EquipmentInventory');

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
    inventoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: EquipmentInventory,
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