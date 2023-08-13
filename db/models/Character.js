const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

class Character extends Model {

}

Character.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    freezeTableName: true,
    modelName: 'Character'
});

module.exports = Character;