const Character = require('./Character');
const ItemInventory = require('./ItemInventory');
const Item = require('./Item');
const Keyword = require('./Keyword');
const Effect = require('./Effect');
const EffectWord = require('./EffectWord');
const Spell = require('./Spell');
const Grimoire = require('./Grimoire');

Character.hasOne(ItemInventory, { foreignKey: 'characterId' });
ItemInventory.belongsTo(Character, { foreignKey: 'characterId' });

ItemInventory.hasMany(Item, { foreignKey: 'inventoryId' });
Item.belongsTo(ItemInventory, { foreignKey: 'inventoryId' });

Keyword.belongsToMany(Effect, {
        through: EffectWord,
        foreignKey: 'keywordId'
});
Effect.belongsToMany(Keyword, {
    through: EffectWord,
    foreignKey: 'effectId'
});

Effect.hasOne(Spell, { foreignKey: 'effectId' });
Spell.belongsTo(Effect, { foreignKey: 'effectId' });

Grimoire.hasMany(Spell, { foreignKey: 'grimoireId' });
Spell.belongsTo(Grimoire, { foreignKey: 'grimoireId' });

module.exports = {
    Character, 
    Inventory: ItemInventory, Item,
    Keyword, Effect, EffectWord,
    Spell, Grimoire
}