const roll = skillCeiling => Math.floor(Math.random() * skillCeiling);

const skillRoll = (skillCeiling, modifier) => roll(skillCeiling) + modifier;

const equipmentModifier = (equipment, stat) => equipment.reduce((mod, equip) => mod + equipment[stat]);

const inventoryModifier = (inventory, stat) => inventory.reduce(
    (mod, item) => item.enchantments.reduce(
        (mod2, enchantment) => mod2 + enchantment.modifiers[stat], 0), 0);

const modifier = (player, stat) => equipmentModifier(player.inventory, stat) + inventoryModifier(player.inventory, stat) + player.stats[stat];

const spellSuccessRoll = (spell, player, chaos) => {
    // Returns true or false depending on success
    const sign = Math.random() < 0.5 ? 1 : -1;
    const chaosModifier = Math.random() * chaos;

    let stat = "power"
    let mod = modifier(player, stat);

    return skillRoll(spell.skillCeiling, player.stats.power + mod + sign * chaosModifier) >= spell.difficulty;
};

const attackRoll = (player, skillCeiling) => {
    // Returns a result number depending on equipment and prowess
    let stat = "prowess";
    let mod = modifier(player, stat);

    return skillRoll(skillCeiling, mod);
};

const defenseRoll = (player, skillCeiling) => {
    let stat = "fortitude";
    let mod = modifier(player, stat);

    return skillRoll(skillCeiling, mod);
}

const perceptionSuccessRoll = (player, skillCeiling, difficulty) => {
    // Returns true or false depending on success
    let stat = "acuity";
    let mod = modifier(player, stat);

    return skillRoll(skillCeiling, mod) >= difficulty;
}

module.exports = {
    roll, 
    skillRoll, 
    spellSuccessRoll, 
    equipmentModifier, 
    attackRoll, 
    inventoryModifier, 
    perceptionSuccessRoll,
    modifier,
    defenseRoll
};