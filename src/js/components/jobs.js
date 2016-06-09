'use strict';

var m = require('mithril');

var jobs = {
  controller: function() {},
  view: function() {
    return m('.jobs.content-text-block.container.text-xs-center.ncss-brand.card', [
      m('.card-header', m('h2', 'INTERESTED IN WORKING AT NIKE')),
      m('.card-block',
        m('a.btn.btn-primary.btn-lg', {
          href: 'http://jobs.nike.com/careers/digital-&-technology-jobs',
          target: '_blank'
        }, 'JOBS')
      )
    ]);
  }
};

module.exports = jobs;
