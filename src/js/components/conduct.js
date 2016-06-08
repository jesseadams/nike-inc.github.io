'use strict';

var m = require('mithril');

var conduct = {
  controller: function() {},
  view: function() {
    return m('.conduct.content-text-block.container.text-xs-center.ncss-brand.card', [
      m('.card-header', m('h2', 'CODE OF CONDUCT')),
      m('.card-block',
        m('p', 'Our Open Source Code of Conduct outlines the standards for acceptable behavior.'),
        m('a.btn.btn-primary', {
          href: 'https://github.com/Nike-Inc/nike-inc.github.io/blob/master/CONDUCT.md',
          target: '_blank'
        }, 'VIEW')
      )
    ]);
  }
};

module.exports = conduct;
