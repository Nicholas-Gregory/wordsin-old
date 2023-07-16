const x = 0.07;
const y = 2;

const expToLevel = level => Math.pow(((level) / x), y);

class Player {
    constructor(id, stats, inventory, spellbook, feats, state) {
        this.id = id;
        this.stats = stats;
        this.inventory = inventory;
        this.spellbook = spellbook;
        this.feats = feats;
        this.state = state;
    }

    addExp(n) {
        this.state.exp += n;

        this.updateLevel();
    }

    updateLevel() {
        let prevLevel = this.state.level;

        this.state.level = x * Math.sqrt(this.state.exp);

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

    use(itemId) {
        let inv = this.inventory;
        for (let i = 0; i < inv.length; i++) {
            if (inv[i] === itemId) {
                inv.splice(i, 1);
            }
        }
    }
}

module.exports = {
    Player
}