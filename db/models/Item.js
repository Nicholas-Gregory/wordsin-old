const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const ItemInventory = require('./ItemInventory');
const Effect = require('./Effect');

class Item extends Model {
    
}

Item.init({
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
            model: ItemInventory,
            key: 'id'
        }
    },
    effectId: {
        type: DataTypes.INTEGER,
        references: {
            model: Effect,
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'Item'
});

module.exports = Item;