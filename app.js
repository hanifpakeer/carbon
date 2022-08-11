const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const rfs = require('rotating-file-stream');

const Projects = require('./models/projects');
const Applications = require('./models/applications');
const LangKeyMap = require('./models/lang_key_map');
const LangAppConnector = require('./models/lang_app_connector');

// File rotation policy for logger
const accessLogStream = rfs.createStream('access.log', {
  interval: '7d',
  path: path.join(__dirname, 'log'),
});

// Router initialiation
const localizeRouter = require('./routes/lang-core');
const projectsRouter = require('./routes/projects');

const app = express();

// Improve logger by providing custom logging and custom tokens
app.use(logger('dev', {
  stream: accessLogStream,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1/localize', localizeRouter);
app.use('/v1/projects', projectsRouter);

// Every imported model will get creted by this sync operation
Projects.sync();
Applications.sync();
LangKeyMap.sync();
LangAppConnector.sync();

module.exports = app;
