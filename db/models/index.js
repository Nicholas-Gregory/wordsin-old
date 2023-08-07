const StoryText = require('./StoryText.js');
const Character = require('./Character.js');
const User = require('./User.js');

StoryText.hasMany(StoryText, { foreignKey: 'parentId' });
StoryText.belongsTo(StoryText, { foreignKey: 'parentId' });

User.hasMany(Character, { foreignKey: 'userId' });
Character.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
    StoryText, Character, User
}