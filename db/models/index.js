const Character = require('./Character');
const ItemInventory = require('./ItemInventory');
const Item = require('./Item');
const Keyword = require('./Keyword');
const Effect = require('./Effect');
const EffectWord = require('./EffectWord');
const Spell = require('./Spell');
const Grimoire = require('./Grimoire');
const EquipmentInventory = require('./EquipmentInventory');
const Equipment = require('./Equipment');
const GrimoireInventory = require('./GrimoireInventory');

Character.hasOne(ItemInventory, { foreignKey: 'characterId' });
ItemInventory.belongsTo(Character, { foreignKey: 'characterId' });

Character.hasOne(EquipmentInventory, { foreignKey: 'characterId' });
EquipmentInventory.belongsTo(Character, { foreignKey: 'characterId' });

Character.hasOne(GrimoireInventory, { foreignKey: 'characterId' });
GrimoireInventory.belongsTo(Character, { foreignKey: 'characterId' });

EquipmentInventory.hasMany(Equipment, { foreignKey: 'inventoryId' });
Equipment.belongsTo(EquipmentInventory, { foreignKey: 'inventoryId' });

ItemInventory.hasMany(Item, { foreignKey: 'inventoryId' });
Item.belongsTo(ItemInventory, { foreignKey: 'inventoryId' });

GrimoireInventory.hasMany(Grimoire, { foreignKey: 'inventoryId' });
Grimoire.belongsTo(GrimoireInventory, { foreignKey: 'inventoryId' });

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

Effect.hasOne(Equipment, { foreignKey: 'effectId' });
Equipment.belongsTo(Effect, { foreignKey: 'effectId' });

Grimoire.hasMany(Spell, { foreignKey: 'grimoireId' });
Spell.belongsTo(Grimoire, { foreignKey: 'grimoireId' });

module.exports = {
    Character, 
    ItemInventory, Item,
    Keyword, Effect, EffectWord,
    Spell, Grimoire, GrimoireInventory,
    Equipment, EquipmentInventory
}