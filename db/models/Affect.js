const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

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
            model: sequelize.models.Keyword,
            key: 'id'
        }
    },
    requirement: {
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