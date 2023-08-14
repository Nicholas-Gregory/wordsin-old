const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Equipment = require('./Equipment');

class Enchantment extends Model {

}

Enchantment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    equipmentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Equipment,
            key: 'id'
        }
    },
    cap: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'Enchantment'
});

module.exports = Enchantment;