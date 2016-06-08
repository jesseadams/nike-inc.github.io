'use strict';
var m = require('mithril');

m.route.mode = 'pathname';

m.route(document.body, '/', {
  '/': require('./pages/main')
});
