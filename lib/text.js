class TextObject {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
}

class Storylet extends TextObject {
    constructor(id, text, title, locationName, actions) {
        super(id, text);
        this.title = title;
        this.locationName = locationName;
        this.actions = actions;
    }
}

class Dialogue extends TextObject {
    constructor(id, text, options) {
        super(id, text);
        this.options = options;
    }
}

class UsableDescription extends TextObject {
    constructor(id, text, usableId) {
        super(id, text);
        this.usableId = usableId;
    }
}