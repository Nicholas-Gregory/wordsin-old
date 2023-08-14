const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const GrimoireInventory = require('./GrimoireInventory');

class Grimoire extends Model {

}

Grimoire.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'Grimoire'
});

module.exports = Grimoire;