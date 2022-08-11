const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const LangKeyMap = sequelize.define('lang_key_map', {
  id: {
    // Integer Datatype
    type: Sequelize.INTEGER,

    // Increment the value automatically
    autoIncrement: true,

    // user_id can not be null.
    allowNull: false,

    // To uniquely identify user
    primaryKey: true,
  },

  // Name of Column #2: name
  key: { type: Sequelize.STRING, allowNull: false, unique: true },

  english: { type: Sequelize.STRING, allowNull: true },

  japanese: { type: Sequelize.STRING, allowNull: true },

  russian: { type: Sequelize.STRING, allowNull: true },

  // Column: Timestamps
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = LangKeyMap;
