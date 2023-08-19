const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

class StateChange extends Model {}

StateChange.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    linkId: {
        type: DataTypes.INTEGER,
        references: {
            model: sequelize.models.LinkInWorld,
            key: 'id'
        }
    },
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'StateChange'
});

module.exports = StateChange;