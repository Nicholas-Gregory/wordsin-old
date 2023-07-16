class Player {
    constructor(id, skills, inventory, spellbook) {
        this.id = id;
        this.skills = skills;
        this.inventory = inventory;
        this.spellbook = spellbook;
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