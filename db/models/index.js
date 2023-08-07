const StoryText = require('./StoryText');
const Character = require('./Character');
const User = require('./User');

StoryText.hasMany(StoryText, { foreignKey: 'parentId' });
StoryText.belongsTo(StoryText, { foreignKey: 'parentId' });

User.hasMany(Character, { foreignKey: 'userId' });
Character.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
    StoryText, Character, User
}