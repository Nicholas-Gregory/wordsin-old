const sequelize = require('./db/connection');
const models = require('./db/models');

sequelize.sync({ force: true }).then(async () => {
    const roland = await models.Character.create({
        name: 'roland'
    });
    await roland.initInventories();

    const keyword1 = await models.Keyword.create({
        word: 'blast'
    });
    const effect = await models.Effect.create({
        ceil: 2,
        time: 10
    });
    await effect.addKeyword(keyword1);

    const item = await models.Item.create({
        name: 'bomb',
        description: 'goes boom'
    });
    await item.associateEffect(effect);

    await roland.addItemToInventory(item);

    const modifier1 = await models.Modifier.create({
        amount: 5
    });
    await modifier1.associateKeyword(keyword1);

    const keyword2 = await models.Keyword.create({
        word: 'slow'
    });
    const modifier2 = await models.Modifier.create({
        amount: 3
    });
    await modifier2.associateKeyword(keyword2);

    const equipment = await models.Equipment.create({
        name: 'sword of blast and slow',
        description: 'a sword'
    });
    await equipment.addModifier(modifier1);
    await equipment.addModifier(modifier2);

    await roland.addEquipmentToInventory(equipment);

    console.log(await roland.use(item));
});