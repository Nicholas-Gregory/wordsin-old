const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const StateChange = require('./StateChange');
const AffectToAdvance = require('./AffectToAdvance');
const LinkInWorld = require('./LinkInWorld');
const Storylet = require('./Storylet');

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

    async activeLinks(storylet) {
        const sLinks = await storylet.getLinks();
        const links = await LinkInWorld.findAll({
            where: {
                worldId: this.id,
                active: true
            }
        });

        return sLinks.filter(sLink => links.find(link => link.linkId === sLink.id));
    }

    async advance(currentStorylet, affect) {
        await this.changeState(affect);

        const activeLinks = await this.activeLinks(currentStorylet);        
        const affectLinks = await affect.getNextStorylets();
        const link = activeLinks.find(link => affectLinks.find(aLink => aLink.id === link.id));

        return await Storylet.findOne({ where: { id: link.second } });
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