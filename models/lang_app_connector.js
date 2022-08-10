const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Applications = require('./applications');
const LangKeyMap = require('./lang_key_map');

const LangAppConnector = sequelize.define('lang_app_connector', {
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

  lang_key_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: LangKeyMap,
      key: 'id',
    },
  },

  app_key_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Applications,
      key: 'id',
    },
  },

  // Column: Timestamps
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = LangAppConnector;
