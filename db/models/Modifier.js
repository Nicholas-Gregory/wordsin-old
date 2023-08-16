const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

class Modifier extends Model {}

Modifier.init({
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
    amount: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    modelName: 'Modifier'
});

module.exports = Modifier;