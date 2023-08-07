const { sequelize } = require('./db/');

sequelize.sync({ force: true });