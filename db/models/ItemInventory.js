const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

const Character = require('./Character');

class ItemInventory extends Model {

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
    modelName: 'ItemInventory'
});

module.exports = ItemInventory;