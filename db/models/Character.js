const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Character extends Model {}

Character.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    experience: {
        type: DataTypes.INTEGER
    },
    hp: {
        type: DataTypes.INTEGER
    },
    rage: {
        type: DataTypes.INTEGER
    },
    control: {
        type: DataTypes.INTEGER
    },
    growth: {
        type: DataTypes.INTEGER
    },
    blood: {
        type: DataTypes.INTEGER
    },
    purity: {
        type: DataTypes.INTEGER
    },
    strength: {
        type: DataTypes.INTEGER
    },
    power: {
        type: DataTypes.INTEGER
    },
    grift: {
        type: DataTypes.INTEGER
    },
    fortitude: {
        type: DataTypes.INTEGER
    },
    prowess: {
        type: DataTypes.INTEGER
    },
    acuity: {
        type: DataTypes.INTEGER
    },
    currentLocation: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Location',
            key: 'id'
        }
    }

}, {
    sequelize,
    freezeTableName: true,
    modelName: 'StoryText'
});

module.exports = Character;