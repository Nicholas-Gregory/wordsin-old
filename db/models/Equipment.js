const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const EquipmentHasModifier = require('./EquipmentHasModifier');

class Equipment extends Model {

    async addModifier(modifier) {
        await EquipmentHasModifier.create({
            equipmentId: this.id,
            modifierId: modifier.id
        });
    }
}

Equipment.init({
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
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    effectId: {
        type: DataTypes.INTEGER,
        references: {
            model: sequelize.models.Effect,
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    modelName: 'Equipment'
});

module.exports = Equipment;