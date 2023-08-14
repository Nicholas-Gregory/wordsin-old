const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Grimoire = require('./Grimoire');
const GrimoireInventory = require('./GrimoireInventory')

class GrimoireInInventory extends Model {}

GrimoireInInventory.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    grimoireId: {
        type: DataTypes.INTEGER,
        references: {
            model: Grimoire,
            key: 'id'
        }
    },
    inventoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: GrimoireInventory,
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
    modelName: 'GrimoireInInventory'
});

module.exports = GrimoireInInventory;