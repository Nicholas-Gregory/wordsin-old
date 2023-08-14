const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Equipment = require('./Equipment');
const EquipmentInventory = require('./EquipmentInventory');

class EquipmentInInventory extends Model {}

EquipmentInInventory.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    equipmentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Equipment,
            key: 'id'
        }
    },
    inventoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: EquipmentInventory,
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'EquipmentInInventory'
});

module.exports = EquipmentInInventory;