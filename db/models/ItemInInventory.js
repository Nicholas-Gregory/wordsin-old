const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Item = require('./Item');
const ItemInventory = require('./ItemInventory');


class ItemInInventory extends Model {}

ItemInInventory.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    itemId: {
        type: DataTypes.INTEGER,
        references: {
            model: Item,
            key: 'id'
        }
    },
    inventoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: ItemInventory,
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
    modelName: 'ItemInInventory'
});

module.exports = ItemInInventory;