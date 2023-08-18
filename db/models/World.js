const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const LinkInWorld = require('./LinkInWorld');

class World extends Model {

    async updateLink(link, state) {
        await LinkInWorld.update({ active: state }, {
            where: {
                id: link.id
            }
        });
    }
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