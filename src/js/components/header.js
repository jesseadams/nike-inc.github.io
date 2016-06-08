'use strict';

var m = require('mithril');

var header = {
  controller: function() {},
  view: function() {
    return m('header#header',
      m('.banner', {
          align: 'center'
        },
        m('img', {
          src: '/dist/img/banner.jpg'
        })
      ));
  }
};

module.exports = header;
