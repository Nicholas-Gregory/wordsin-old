const { DataTypes, Model } = require('sequelize');
const sequelize = require('../connection');

const NextStorylets = require('./NextStorylet');
const Affect = require('./Affect');

class AffectToAdvance extends Model {

}

AffectToAdvance.init({
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
            model: NextStorylets,
            key: 'id'
        }
    },
    affectId: {
        type: DataTypes.INTEGER,
        references: {
            model: Affect,
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'AffectToAdvance'
});

module.exports = AffectToAdvance;