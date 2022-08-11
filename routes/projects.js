// Projects Related APIs
const express = require('express');

const router = express.Router();

const projectsController = require('../controllers/projects');

const globalConstants = require('../global_variables/constants');

const requestPostDataMiddleWare = require('../middlewares/requestPostData');

/* GET all projects */
router.get('/', async (req, res) => {
  const data = await projectsController.getAllProjects();
  if (data.error) {
    res.status(globalConstants.BAD_REQUEST).send(data);
  } else {
    res.status(globalConstants.OK).send(data);
  }
});

/* GET projects by id */
router.get('/:id', async (req, res) => {
  const data = await projectsController.getProjectsById(req.params.id);
  if (data.error) {
    res.status(globalConstants.BAD_REQUEST).send(data);
  } else {
    res.status(globalConstants.OK).send(data);
  }
});

const createProjectParameters = {
  required: ['project_name'],
  optional: [],
};
/* Create projects */
router.post(
  '/',
  requestPostDataMiddleWare.getPostData(createProjectParameters),
  async (req, res) => {
    const data = await projectsController.createProject(req.postData);
    if (data.error) {
      res.status(globalConstants.BAD_REQUEST).send(data);
    } else {
      res.status(globalConstants.OK).send(data);
    }
  },
);

module.exports = router;
