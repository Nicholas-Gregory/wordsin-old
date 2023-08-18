const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

class AdvanceWorld extends Model {}

AdvanceWorld.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    advanceId: {
        type: DataTypes.INTEGER,
        references: {
            model: sequelize.models.AffectToAdvance,
            key: 'id'
        }
    },
    worldLinkId: {
        type: DataTypes.INTEGER,
        references: {
            model: sequelize.models.LinkInWorld,
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'AdvanceWorld'
});

module.exports = AdvanceWorld;