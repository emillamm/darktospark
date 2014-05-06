'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    //data = require('./static/ringdata');
    data = require('./controllers/ringdata');

/**
 * Application routes
 */
//module.exports = function(app, auth) {
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);

  app.get('/api/getRings', data.ringdata);
  

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  // app.get('/partials/*', auth, index.partials);
  // app.get('/*', auth, index.index);

  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};