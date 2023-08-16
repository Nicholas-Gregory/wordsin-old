const sequelize = require('./db/connection');
const models = require('./db/models');

sequelize.sync({ force: true }).then(async () => {
    const roland = await models.Character.create({ name: 'Roland' });
    await roland.initInventories();

    await roland.addItemToInventory(await models.Item.create({
        name: 'Potion of Testing',
        description: 'Tests a class'
    }));

    const piano = await models.Equipment.create({
        name: 'Piano of Triumph',
        description: 'Play a song well and you will triumph in one endeavor on one day, both picked at random'
    });

    const keyword = await models.Keyword.create({
        word: 'float'
    });

    const modifier = await models.Modifier.create({
        amount: 3
    });

    await modifier.associateKeyword(keyword);

    await piano.addModifier(modifier)

    await roland.addEquipmentToInventory(piano);

    await roland.addGrimoireToInventory(await models.Grimoire.create({
        title: 'The Spellbook of Roland'
    }));

    console.log(await (await roland.getItemInventory()).getItems());
    console.log(await (await roland.getEquipmentInventory()).getEquipment());
    console.log(await (await roland.getGrimoireInventory()).getGrimoires());
    console.log(await roland.allModifiers());
});