const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const NextStorylet = require('./NextStorylet');
const AffectToAdvance = require('./AffectToAdvance');

class Storylet extends Model {

    async link(storylet, affects) {
        const link = await NextStorylet.create({
            second: storylet.id,
            first: this.id
        });
        
        const advance = await AffectToAdvance.bulkCreate(affects.map(affect => ({
            next: link.id,
            affectId: affect.id
        })));

        return { link, advance };
    }
}

Storylet.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: 'Storylet'
});

module.exports = Storylet;