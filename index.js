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

    const sLink = await storylet1.link(storylet2, [affect]);

    const world = await models.World.create({});
    const link = await models.LinkInWorld.create({
        worldId: world.id,
        linkId: sLink.link.id,
    });
    const state = await models.StateChange.create({
        linkId: link.id,
        advanceId: sLink.advance[0].id,
        state: true
    });

    await world.changeState(affect);
    await link.reload();  
    
    console.log(await world.activeNexts(storylet1));
});