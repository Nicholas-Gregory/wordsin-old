const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const StateChange = require('./StateChange');
const AffectToAdvance = require('./AffectToAdvance');
const Storylet = require('./Storylet');
const LinkInWorld = require('./LinkInWorld');

class World extends Model {

    async changeState(affect) {
        const advances = await AffectToAdvance.findAll({
            where: {
                affectId: affect.id
            },
            include: {
                model: StateChange,
            }
        });

        for (let advance of advances) {                  
            for (let state of advance.StateChanges) {
                await state.change();
            }
        }
    }

    async activeNexts(storylet) {
        const next = await storylet.getNext();
        console.log(next);
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