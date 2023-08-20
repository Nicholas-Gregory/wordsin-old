const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const LinkInWorld = require('./LinkInWorld');

class World extends Model {

    async changeState() {
        const links = await LinkInWorld.findAll({
            where: {
                worldId: this.id
            }
        });

        const states = (await Promise.all(links.map(async link => await link.getStateChanges()))).flat();

        for (let state of states) {
            await state.change();
        }
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