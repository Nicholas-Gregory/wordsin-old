const { StoryText } = require('../models');

const byId = async (model, id) => (await model.findByPk(id)).get({ plain: true });

const storyTextChildren = async id => (await StoryText.findAll({ where: { parentId: id } })).map(item => item.get({ plain: true }));

module.exports = {
    byId, storyTextChildren
}