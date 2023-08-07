const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class TextLink extends Model {}

TextLink.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    to: {
        type: DataTypes.INTEGER,
        references: {
            model: 'StoryText',
            key: 'id'
        }
    },
    from: {
        type: DataTypes.INTEGER,
        references: {
            model: 'StoryText',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    modelName: 'TextLink'
});

module.exports = TextLink;