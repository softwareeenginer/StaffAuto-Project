const Sequelize = require('sequelize');

const sequelize = new Sequelize('staffauto', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: "+03:00",
});

const db = {};
db.User = sequelize.import(__dirname + '/../models/Users/User.js');
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
