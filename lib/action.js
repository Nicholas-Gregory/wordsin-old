const roll = skillCeiling => Math.random() * skillCeiling;

const skillRoll = (skillCeiling, modifier, difficulty) => roll(skillCeiling) + modifier >= difficulty;

const spellRoll = (spell, player, chaos) => {
    const sign = Math.random() < 0.5 ? 1 : -1;
    const chaosModifier = Math.random() * chaos;

    let equipmentModifier = 0;
    let equipment = player.state.equipment;
    for (equip of equipment) {
        if (equip.magic) {
            equipmentModifier += equip.magic;
        }
    }

    return skillRoll(spell.skillCeiling, player.stats.power + equipmentModifier + sign * chaosModifier, spell.difficulty);
}

module.exports = {
    skillRoll, spellRoll
}