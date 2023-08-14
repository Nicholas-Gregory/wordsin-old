const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Modifier = require('./Modifier');
const Equipment = require('./Equipment');

class EquipmentHasModifier extends Model {}

EquipmentHasModifier.init({
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
    modifierId: {
        type: DataTypes.INTEGER,
        references: {
            model: Modifier,
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'EquipmentHasModifier'
});

module.exports = EquipmentHasModifier;