const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const EquipmentInInventory = require('./EquipmentInInventory');

class EquipmentInventory extends Model {

    async add(equipment) {
        const through = await EquipmentInInventory.findOne({
            where: {
                inventoryId: this.id
            }
        });

        if (through) {
            through.quantity++;
            await through.save();
        } else {
            await EquipmentInInventory.create({
                equipmentId: equipment.id,
                inventoryId: this.id,
                quantity: 1
            });
        }
    }
}

EquipmentInventory.init({
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
    modelName: 'EquipmentInventory'
});

module.exports = EquipmentInventory;