const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Equipment extends Model {}

Equipment.init({
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
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    effectId: {
        type: DataTypes.INTEGER,
        references: {
            model: sequelize.models.Effect,
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    modelName: 'Equipment'
});

module.exports = Equipment;