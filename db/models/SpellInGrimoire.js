const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Spell = require('./Spell');
const Grimoire = require('./Grimoire');

class SpellInGrimoire extends Model {}

SpellInGrimoire.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    spellId: {
        type: DataTypes.INTEGER,
        references: {
            model: Spell,
            key: 'id'
        }
    },
    grimoireId: {
        type: DataTypes.INTEGER,
        references: {
            model: Grimoire,
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'SpellInGrimoire'
});

module.exports = SpellInGrimoire;