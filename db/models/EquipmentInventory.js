const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Character = require('./Character');

class EquipmentInventory extends Model{

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
            model: Character,
            key: 'id'
        }
    },
    capacity: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'EquipmentInventory'
});

module.exports = EquipmentInventory;