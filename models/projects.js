const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Projects = sequelize.define('projects', {
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
  project_name: { type: Sequelize.STRING, allowNull: false, unique: true },

  // Column: Timestamps
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = Projects;
