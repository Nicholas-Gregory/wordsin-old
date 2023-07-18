const roll = skillCeiling => Math.random() * skillCeiling;

const skillRoll = (skillCeiling, modifier) => roll(skillCeiling) + modifier;

const equipmentModifier = (equipment, stat) => equipment.reduce((mod, equip) => mod + equipment[stat]);

const inventoryModifier = (inventory, stat) => inventory.reduce(
    (mod, item) => item.enchantments.reduce(
        (mod2, enchantment) => mod2 + enchantment.modifiers[stat], 0), 0);

const spellSuccessRoll = (spell, player, chaos) => {
    // Returns true or false depending on success
    const sign = Math.random() < 0.5 ? 1 : -1;
    const chaosModifier = Math.random() * chaos;

    let stat = "power"
    let mod = equipmentModifier(player.state.equipment, stat);
    mod += inventoryModifier(player.inventory, stat);

    return skillRoll(spell.skillCeiling, player.stats.power + mod + sign * chaosModifier) >= spell.difficulty;
};

const attackRoll = (player, skillCeiling) => {
    // Returns a result number depending on equipment and prowess
    let stat = "attack";
    let mod = equipmentModifier(player.state.equipment, stat);
    mod += inventoryModifier(player.inventory, stat);
    mod += player.stats.prowess;

    return skillRoll(skillCeiling, mod);
};

const perceptionSuccessRoll = (player, skillCeiling, difficulty) => {
    // Returns true or false depending on success
    let stat = "acuity";
    let mod = equipmentModifier(player.state.equipment, stat);
    mod += inventoryModifier(player.inventory, stat);

    return skillRoll(skillCeiling, mod) >= difficulty;
}

module.exports = {
    roll, 
    skillRoll, 
    spellSuccessRoll, 
    equipmentModifier, 
    attackRoll, 
    inventoryModifier, 
    perceptionSuccessRoll
};