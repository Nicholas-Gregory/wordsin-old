const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Storylet = require('./Storylet');

class NextStorylet extends Model {}

NextStorylet.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    next: {
        type: DataTypes.INTEGER,
        references: {
            model: Storylet,
            key: 'id'
        }
    },
    current: {
        type: DataTypes.INTEGER,
        references: {
            model: Storylet,
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'NextStorylet'
});

module.exports = NextStorylet;