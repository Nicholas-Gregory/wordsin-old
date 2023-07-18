const utils = require("./utils.js");
const roll = require("./roll.js");

class Player {
    constructor(id, stats, inventory, spellbook, equipment, feats, state, currentStorylet) {
        this.id = id;
        this.stats = stats;
        this.inventory = inventory;
        this.spellbook = spellbook;
        this.equipment = equipment;
        this.feats = feats;
        this.state = state;
        this.currentStorylet = currentStorylet;
    }

    attack(skillCeiling) {
        return roll.attackRoll(this, skillCeiling);
    }

    defend(skillCeiling) {
        return roll.defenseRoll(this, skillCeiling);
    }

    equip(equipment) {
        this.equipment[equipment.type] = equipment;
    }

    addExp(n) {
        this.state.exp += n;

        this.updateLevel();
    }

    updateLevel() {
        let prevLevel = this.state.level;

        this.state.level = utils.expPerLevelVal * Math.sqrt(this.state.exp);

        this.levelUp(this.state.level - prevLevel);
    }

    levelUp(levels) {
        this.state.skillPoints += levels;
    }

    increaseStat(stat, n) {
        if (this.state.skillPoints >= n) {
            this.stats[stat] += n;
            this.state.skillPoints -= n;
        }
    }

    use(item) {
        let inv = this.inventory;
        inv = inv.filter(invItem => invItem.id !== item.id);
        // TODO item handler to carry out the effect of the item
    }

    cast(spell, chaos) {
        let spellbook = this.spellbook;
        for (let i = 0; i < spellbook.length; i++) {
            if (spell.id === spellbook[i].id) {
                let state = this.state;
                if (state.intent >= spell.cost) {
                    state.intent -= spell.cost;
                    if (roll.spellSuccessRoll(spell, this, chaos)) {
                        // TODO spell handler to carry out the effect of the spell
                    }
                }
            }
        }
    }
}

module.exports = {
    Player
}