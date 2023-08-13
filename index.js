const { combine } = require('./lib/effect');
const sequelize = require('./db/connection');
const models = require('./db/models');

sequelize.sync({ force: true });