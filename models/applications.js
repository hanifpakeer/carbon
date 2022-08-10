const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
const Projects = require('./projects');

const Applications = sequelize.define('applications', {
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

  project_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Projects,
      key: 'id',
    },
  },
  // Name of Column #2: name
  application_name: { type: Sequelize.STRING, allowNull: false },

  // Column: Timestamps
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

module.exports = Applications;
