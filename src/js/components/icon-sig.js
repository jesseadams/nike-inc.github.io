'use strict';

var m = require('mithril');

var icon = {
  controller: function() {},
  view: function() {
    return m('.icon-sig.content-text-block.container.text-xs-center.ncss-brand', [
      m('h1',
        m('a', {
            href: 'https://nike.com',
            target: '_blank'
          }, m('i.g72-snkrs')
        )
      )
    ]);
  }
};

module.exports = icon;
