'use strict';
var m = require('mithril');

var page = require('../components/page');
var repos = require('../components/repos');
var conduct = require('../components/conduct');
var cla = require('../components/cla');
var jobs = require('../components/jobs');
var icon = require('../components/icon-sig');

var main = {
  view: function() {
    return m.component(page, {
      content: [repos, conduct, cla, jobs, icon]
    });
  }
};

module.exports = main;
