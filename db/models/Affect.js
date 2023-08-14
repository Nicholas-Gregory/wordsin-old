const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

const Keyword = require('./Keyword');

class Affect extends Model {}

Affect.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    keywordId: {
        type: DataTypes.INTEGER,
        references: {
            model: Keyword,
            key: 'id'
        }
    },
    req: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'Affect'
});

module.exports = Affect;