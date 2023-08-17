const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class World extends Model {

}

World.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'World'
});

module.exports = World;