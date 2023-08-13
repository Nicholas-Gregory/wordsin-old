const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Effect = require('./Effect');
const Keyword = require('./Keyword');

class EffectWord extends Model {

}

EffectWord.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    effectId: {
        type: DataTypes.INTEGER,
        references: {
            model: Effect,
            key: 'id'
        }
    },
    keywordId: {
        type: DataTypes.INTEGER,
        references: {
            model: Keyword,
            key: 'id'
        }
    }
} , {
    sequelize,
    freezeTableName: true,
    modelName: 'EffectWord'
});

module.exports = EffectWord;