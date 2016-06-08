'use strict';

var m = require('mithril');

function renderContributors(contributor) {
  return contributor ? m('.col-sm-4.col-md-3.col-lg-2.col-xl-2', [
    m('a', {
      href: contributor.html_url,
      target: '_blank'
    }, [
      m('img.card-img-top.card-img-top-contributor', {
        src: contributor.avatar_url
      })
    ]),
    m('small.card-subtitle.text-muted', contributor.login)
  ]) : '';
}

var contributors = {
  controller: function() {},
  view: function(ctrl, args) {
    return m('.contributors.content-text-block.container.ncss-brand.card', [
      m('.card-header.text-xs-center',
        m('h2', 'CONTRIBUTORS')
      ),
      m('.card-block',
        m('.row',
          args.contributors.map(renderContributors)
        )
      )
    ]);
  }
};

module.exports = contributors;
