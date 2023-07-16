class Player {
    constructor(id, stats, inventory, spellbook, feats, state) {
        this.id = id;
        this.stats = stats;
        this.inventory = inventory;
        this.spellbook = spellbook;
        this.feats = feats;
        this.state = state;
    }

    use(itemId) {
        let inv = this.inventory;
        for (let i = 0; i < inv.length; i++) {
            if (inv[i] === itemId) {
                return inv.splice(i, 1)[0];
            }
        }
    }
}

module.exports = {
    Player
}