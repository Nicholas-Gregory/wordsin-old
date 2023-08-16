const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

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
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'Grimoire'
});

module.exports = Grimoire;