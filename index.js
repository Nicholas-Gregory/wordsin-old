const sequelize = require('./db/connection');
const models = require('./db/models');

sequelize.sync({ force: true }).then(async () => {
    const storylet1 = await models.Storylet.create({
        body: "You see a chair"
    });
    const storylet2 = await models.Storylet.create({
        body: "The chair is wet"
    });

    const move = await models.Keyword.create({
        word: 'move'
    });
    const affect = await models.Affect.create({
        keywordId: move.id,
        requirement: 4
    });

    await storylet1.link(storylet2, [affect]);

    console.log(await storylet1.affectsAndNexts());
});