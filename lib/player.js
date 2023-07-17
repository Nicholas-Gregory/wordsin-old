const utils = require("./utils.js");

class Player {
    constructor(id, stats, inventory, spellbook, feats, state, currentStorylet) {
        this.id = id;
        this.stats = stats;
        this.inventory = inventory;
        this.spellbook = spellbook;
        this.feats = feats;
        this.state = state;
        this.currentStorylet = currentStorylet;
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
        for (let i = 0; i < inv.length; i++) {
            if (inv[i].id === item.id) {
                inv.splice(i, 1);
                // TODO item handler to carry out the effect of the item
            }
        }
    }

    spellRoll(spell, chaos) {
        let n = Math.random() * chaos;
        let sign = Math.random() < 0.5 ? 1 : -1;

        return (sign * n) + this.stats.power >= spell.difficulty;
    }

    cast(spell, chaos) {
        let spellbook = this.spellbook;
        for (let i = 0; i < spellbook.length; i++) {
            if (spell.id === spellbook[i].id) {
                let state = this.state;
                if (state.intent >= spell.cost) {
                    state.intent -= spell.cost;
                    if (this.spellRoll(spell, chaos)) {                        
                        // TODO spell handler to carry out the effect of the spell
                    }
                }
            }
        }
    }
}

module.exports = {
    Player, expToLevel
}