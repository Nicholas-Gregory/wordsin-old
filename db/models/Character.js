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

    async equipment() {
        return await (await this.getEquipmentInventory()).getEquipment();
    }

    async equipmentModifiers() {
        const equipment = await this.equipment();        
        const result = [];

        for (let equip of equipment) {            
            result.push(...await equip.getModifiers());
        }

        return result;
    }

    async allModifiers() {
        const equipmentModifiers = await this.equipmentModifiers();
        const skillModifiers = await this.getModifiers();

        return [...equipmentModifiers, ...skillModifiers];
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
    },
    quanta: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    level: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    modelName: 'Character'
});

module.exports = Character;