const StoryText = require('./StoryText.js');
const Character = require('./Character.js');
const User = require('./User.js');
const TextLink = require('./TextLink.js')

StoryText.hasMany(StoryText, { through: TextLink});
StoryText.belongsToMany(StoryText, { through: TextLink });

User.hasMany(Character, { foreignKey: 'userId' });
Character.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
    StoryText, Character, User
}