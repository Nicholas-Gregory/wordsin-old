const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const GrimoireInInventory = require('./GrimoireInInventory')

class GrimoireInventory extends Model {

    async add(grimoire) {
        const through = await GrimoireInInventory.findOne({
            where: {
                inventoryId: this.id
            }
        });

        if (through) {
            through.quantity++;
            await through.save();
        } else {
            await GrimoireInInventory.create({
                grimoireId: grimoire.id,
                inventoryId: this.id,
                quantity: 1
            });
        }
    }
}

GrimoireInventory.init({
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
}, 
{
    sequelize,
    freezeTableName: true,
    modelName: 'GrimoireInventory'
});

module.exports = GrimoireInventory;