const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

const ItemInventory = require('./ItemInventory');
const EquipmentInventory = require('./EquipmentInventory');
const GrimoireInventory = require('./GrimoireInventory');

class Character extends Model {
    
    async initInventories() {
        await ItemInventory.create({
            characterId: this.id
        });
        await EquipmentInventory.create({
            characterId: this.id
        });
        await GrimoireInventory.create({
            characterId: this.id
        });
    }

    async addItemToInventory(item) {
        await (await this.getItemInventory()).add(item);
    }

    async addEquipmentToInventory(equipment) {
        await (await this.getEquipmentInventory()).add(equipment);
    }

    async addGrimoireToInventory(grimoire) {
        await (await this.getGrimoireInventory()).add(grimoire);
    }
}

Character.init({
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
    }
},
{
    sequelize,
    freezeTableName: true,
    modelName: 'Character'
});

module.exports = Character;