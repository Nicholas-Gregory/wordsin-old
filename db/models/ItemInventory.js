const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

const ItemInInventory = require('./ItemInInventory');

class ItemInventory extends Model {

    async add(item) {
        const through = await ItemInInventory.findOne({
            where: {
                inventoryId: this.id
            }
        });

        if (through) {
            through.quantity++;
            await through.save();
        } else {
            await ItemInInventory.create({
                itemId: item.id,
                inventoryId: this.id,
                quantity: 1
            });
        }
    }
}

ItemInventory.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    characterId: {
        type: DataTypes.INTEGER,
        references: {
            model: sequelize.models.Character,
            key: 'id'
        }
    },
    capacity: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'ItemInventory'
});

module.exports = ItemInventory;