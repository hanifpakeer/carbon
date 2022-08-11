const Projects = require('../models/projects');

/**
 * Get All Projects
*/
async function getAllProjects() {
  let projects = {};
  const data = {};
  const SUCCESS_MESSAGE = 'Successfully retreived all projects';
  const ERROR_MESSAGE = 'Error while retreiving all projects';
  try {
    projects = await Projects.findAll({
      attributes: [
        'id',
        'project_name',
      ],
    });
    data.data = projects;
    data.success = SUCCESS_MESSAGE;
  } catch (err) {
    // log the error
    data.error = ERROR_MESSAGE;
  }

  return data;
}

/**
 * Get Projects By Id
*/
async function getProjectsById(id) {
  let projects = {};
  const data = {};
  const SUCCESS_MESSAGE = 'Successfully retreived project by Id';
  const ERROR_MESSAGE = 'Error while retreiving project by Id';
  const INVALID_PARAMETER = 'Invalid Parameter';
  try {
    const projectId = parseInt(id, 10);
    try {
      projects = await Projects.findAll({
        where: {
          id: projectId,
        },
      });
      data.data = projects;
      data.success = SUCCESS_MESSAGE;
    } catch (err) {
      // log the error
      data.error = ERROR_MESSAGE;
    }
  } catch (err) {
    // log the error
    data.error = INVALID_PARAMETER;
  }
  return projects;
}

/*
 * Create a project
*/
async function createProject(data) {
  let creationResult = {};
  const SUCCESS_MESSAGE = 'Project created successfully';
  const ERROR_MESSAGE = 'Error in creating project';
  try {
    creationResult = await Projects.create(data);
    creationResult.success = SUCCESS_MESSAGE;
  } catch (err) {
    // log the error
    creationResult.error = ERROR_MESSAGE;
  }
  return creationResult;
}

module.exports.getAllProjects = getAllProjects;
module.exports.getProjectsById = getProjectsById;
module.exports.createProject = createProject;
