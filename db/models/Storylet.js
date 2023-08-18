const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

const NextStorylet = require('./NextStorylet');
const Affect = require('./Affect');
const AffectToAdvance = require('./AffectToAdvance');

class Storylet extends Model {

    async link(storylet, affects) {
        const link = await NextStorylet.create({
            next: storylet.id,
            current: this.id
        });
        
        await AffectToAdvance.bulkCreate(affects.map(affect => ({
            next: link.id,
            affectId: affect.id
        })));
    }
    
    async affectsAndNexts() {
        const affectsAndLinks = await NextStorylet.findAll({
            where: {
                current: this.id
            }
        });

        return Promise.all(affectsAndLinks.map(async element => ({ 
            storylet: await Storylet.findByPk(element.next), 
            affects: await element.getAffects()
        })));
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