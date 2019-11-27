const express = require('express');

const ConectController = require('./controllers/ConectController');
const CourseController = require('./controllers/CourseController');
const EntherpriseController = require('./controllers/EntherpriseController');
const SchoolController = require('./controllers/SchoolController');
const SessionController = require('./controllers/SessionController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/conections/:id', ConectController.index);
routes.post('/conections', ConectController.store);

routes.get('/courses', CourseController.index);

routes.get('/entherprises/:id', EntherpriseController.index);
routes.post('/entherprises', EntherpriseController.store);

routes.get('/schools/:id', SchoolController.index);
routes.post('/schools', SchoolController.store);

routes.post('/sessions', SessionController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

module.exports = routes;
