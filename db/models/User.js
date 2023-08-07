const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        set(value) { this.setDataValue('password', bcrypt.hash(value, 10))}
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'StoryText'
});

module.exports = User;