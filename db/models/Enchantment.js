const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

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
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'Enchantment'
});

module.exports = Enchantment;