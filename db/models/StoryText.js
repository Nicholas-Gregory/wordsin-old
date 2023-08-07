const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class StoryText extends Model {}

StoryText.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    contents: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    parentId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'StoryText',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'StoryText'
});

module.exports = StoryText;