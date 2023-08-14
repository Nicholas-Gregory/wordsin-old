const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Effect = require('./Effect');
const Affect = require('./Affect');

class Spell extends Model {

}

Spell.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    cost: {
        type: DataTypes.INTEGER,
        references: {
            model: Affect,
            key: 'id'
        }
    },
    effectId: {
        type: DataTypes.INTEGER,
        references: {
            model: Effect,
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'Spell'
});

module.exports = Spell;