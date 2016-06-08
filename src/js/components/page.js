'use strict';

var m = require('mithril');

var header = require('../components/header');
var footer = require('../components/footer');

var page = {
  view: function(ctrl, args) {
    return m('.page',[
      m.component(header),
      m('main',
        args.content.map(function(content) {
          return m.component(content);
        })
      ),
      m.component(footer)
    ]);
  }
};

module.exports = page;
