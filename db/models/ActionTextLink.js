const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class ActionTextLink extends Model {}

ActionTextLink.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    actionId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Action',
            key: 'id'
        }
    },
    textLinkId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'TextLink',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    modelName: 'ActionTextLink'
});

module.exports = ActionTextLink