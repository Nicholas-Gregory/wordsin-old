class Usable {
    constructor(id, name, description, effect) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.effect = effect;
    }
}

class Item extends Usable {
    constructor(id, name, description, effect, recipe) {
        super(id, name, description, effect);
        this.recipe = recipe;
    }
}

class Spell extends Usable {
    constructor(id, name, description, effect, cost, difficulty, skillCeiling, intentType) {
        super(id, name, description, effect);
        this.cost = cost;
        this.difficulty = difficulty;
        this.skillCeiling = skillCeiling;
        this.intentType = intentType;
    }
}

class Feat extends Usable {
    constructor(id, name, description, effect) {
        super(id, name, description, effect);
    }
}

module.exports = {
    Item, Spell, Feat
}