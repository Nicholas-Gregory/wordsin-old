const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

const Effect = require('./Effect');

class Cantrip extends Model {}

Cantrip.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    effectId: {
        type: DataTypes.INTEGER,
        references: {
            model: Effect,
            key: 'id'
        }
    },
    uses: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    modelName: 'Cantrip'
});

module.exports = Cantrip;