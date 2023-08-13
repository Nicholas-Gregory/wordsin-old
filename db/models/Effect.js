const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Effect extends Model {

}

Effect.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    ceil: {
        type: DataTypes.INTEGER
    },
    time: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'Effect'
});

module.exports = Effect;