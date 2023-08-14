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
const EquipmentInInventory = require('./EquipmentInInventory');
const ItemInInventory = require('./ItemInInventory');
const GrimoireInInventory = require('./GrimoireInInventory');
const SpellInGrimoire = require('./SpellInGrimoire');
const Affect = require ('./Affect');
const Modifier = require('./Modifier');

Character.hasOne(ItemInventory, { foreignKey: 'characterId' });
ItemInventory.belongsTo(Character, { foreignKey: 'characterId' });

Character.hasOne(EquipmentInventory, { foreignKey: 'characterId' });
EquipmentInventory.belongsTo(Character, { foreignKey: 'characterId' });

Character.hasOne(GrimoireInventory, { foreignKey: 'characterId' });
GrimoireInventory.belongsTo(Character, { foreignKey: 'characterId' });

EquipmentInventory.belongsToMany(Equipment, {
    through: EquipmentInInventory,
    foreignKey: 'inventoryId' 
});
Equipment.belongsToMany(EquipmentInventory, {
    through: EquipmentInInventory,
    foreignKey: 'equipmentId'
});

ItemInventory.belongsToMany(Item, {
    through: ItemInInventory,
    foreignKey: 'inventoryId'
});
Item.belongsToMany(ItemInventory, {
    through: ItemInInventory,
    foreignKey: 'itemId'
})

GrimoireInventory.belongsToMany(Grimoire, {
    through: GrimoireInInventory,
    foreignKey: 'inventoryId'
});
Grimoire.belongsToMany(GrimoireInventory, {
    through: GrimoireInInventory,
    foreignKey: 'grimoireId'
});

Keyword.belongsToMany(Effect, {
    through: EffectWord,
    foreignKey: 'keywordId'
});
Effect.belongsToMany(Keyword, {
    through: EffectWord,
    foreignKey: 'effectId'
});

Effect.hasMany(Spell, { foreignKey: 'effectId' });
Spell.belongsTo(Effect, { foreignKey: 'effectId' });

Effect.hasMany(Equipment, { foreignKey: 'effectId' });
Equipment.belongsTo(Effect, { foreignKey: 'effectId' });

Effect.hasMany(Item, { foreignKey: 'effectId' });
Item.belongsTo(Effect, { foreignKey: 'effectId' });

Grimoire.belongsToMany(Spell, {
    through: SpellInGrimoire,
    foreignKey: 'grimoireId'
});
Spell.belongsToMany(Grimoire, {
    through: SpellInGrimoire,
    foreignKey: 'spellId'
});

Keyword.hasMany(Affect, { foreignKey: 'keywordId' });
Affect.belongsTo(Keyword, { foreignKey: 'keywordId' });

Keyword.hasMany(Modifier, { foreignKey: 'keywordId' });
Modifier.belongsTo(Keyword, { foreignKey: 'keywordId' });

module.exports = {
    Character, 
    ItemInventory, Item,
    Keyword, Effect, EffectWord,
    Spell, Grimoire, GrimoireInventory,
    Equipment, EquipmentInventory,
    EquipmentInInventory, ItemInInventory, GrimoireInInventory, SpellInGrimoire,
    Affect, Modifier
}