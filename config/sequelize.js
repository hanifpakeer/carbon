const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'lang-barrier',
  process.env.DB_USERNAME || 'root',
  process.env.DB_PASSWORD || 'root',
  {
    dialect: process.env.DB_DIALECT || 'mysql',
    host: process.env.DB_HOST || 'localhost',
  },
);

module.exports = sequelize;
