// This router should contain core functionalities
// Like uploading, Retreiving language (localization) related data
const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.status(200).send({
    message: 'hello world',
  });
});

module.exports = router;
