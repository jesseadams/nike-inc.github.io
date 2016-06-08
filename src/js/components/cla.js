'use strict';

var m = require('mithril');

var conduct = {
  controller: function() {},
  view: function() {
    return m('.cla.content-text-block.container.text-xs-center.ncss-brand.card', [
      m('.card-header', m('h2', 'CONTRIBUTOR\'S LICENSE AGREEMENT')),
      m('.card-block',
        m('p', 'To contribute to Nike open-source projects you must accept and submit a Contributors License Agreement (CLA).'),
        m('a.btn.btn-primary', {
          href: 'CLA.md',
          target: '_blank'
        }, 'VIEW')
      )
    ]);
  }
};

module.exports = conduct;
