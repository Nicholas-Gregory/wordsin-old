class Usable {
    constructor(id, name, description, effect) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.effect = effect;
    }
}

class Item extends Usable {
    constructor(id, name, description, effect) {
        super(id, name, description, effect);
    }
}

class Spell extends Usable {
    constructor(id, name, description, effect) {
        super(id, name, description, effect);
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