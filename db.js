const { MongoClient } = require("mongodb");

const player = require("./lib/player.js");
const item = require("./lib/item.js");
const spell = require("./lib/spell.js");

require("dotenv").config();

class Database {
  constructor() {
    this.client = new MongoClient(process.env.DBCRED);

    this.textDb = this.client.db("text");
    this.storylets = this.textDb.collection("storylets");
    this.dialogue = this.textDb.collection("dialogue");

    this.usablesDb = this.client.db("usables");
    this.items = this.usablesDb.collection("items");
    this.spells = this.usablesDb.collection("spells");

    this.usersDb = this.client.db("users");
    this.players = this.usersDb.collection("players");
  }

  writeStorylet(storylet) {
    return this.storylets.insertOne({
      _id: storylet.id,
      text: storylet.text,
      title: storylet.title,
      locationName: storylet.locationName,
      actions: storylet.actions
    });
  }

  storyletById(id) {
    return this.storylets.findOne({ _id: id });
  }

  storyletByTitle(title) {
    return this.storylets.findOne( { title: title });
  }

  storyletsAt(locationName) {
    return this.storylets.find({ locationName: locationName }).toArray();
  }

  advanceStory(storylet, actionString) {
    return this.storyletById(storylet.actions[actionString]);
  }

  writePlayer(player) {
    return this.players.insertOne({
      _id: player.id,
      skills: player.skills,
      inventory: player.inventory,
      spellbook: player.spellbook
    });
  }

  async playerByName(name) {
    const playerDoc = await this.players.findOne({ name: name });

    return new player.Player(playerDoc._id, playerDoc.skills, playerDoc.inventory);
  }

  async playerById(id) {
    const playerDoc = await this.players.findOne({ _id: id });

    return new player.Player(playerDoc._id, playerDoc.skills, playerDoc.inventory);
  }

  writeItem(item) {
    return this.items.insertOne({
      _id: item.id,
      name: item.name,
      description: item.description,
      effect: item.effect
    });
  }

  async itemById(id) {
    const itemDoc = await this.items.findOne({ _id: id });

    return new item.Item(itemDoc._id, itemDoc.name, itemDoc.description, itemDoc.effect);
  }

  async itemByName(name) {
    const itemDoc = await this.items.findOne({ name: name });

    return new item.Item(itemDoc._id, itemDoc.name, itemDoc.description, itemDoc.effect);
  }

  writeSpell(spell) {
    return this.spells.insertOne({
      _id: spell.id,
      name: spell.name,
      description: spell.description,
      effect: spell.effect
    });
  }

  async spellById(id) {
    const spellDoc = await this.spells.findOne({ _id: id });

    return new spell.Spell(spellDoc._id, spellDoc.name, spellDoc.description, spellDoc.effect);
  }

  async spellByName(name) {
    const spellDoc = await this.spells.findOne({ name: name });

    return new spell.Spell(spellDoc._id, spellDoc.name, spellDoc.description, spellDoc.effect);
  }
}

module.exports = {
  Database
}