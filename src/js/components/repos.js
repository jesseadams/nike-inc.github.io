'use strict';

// process.env.GH_USER = window.prompt('Enter Github User');
// process.env.GH_PASS = window.prompt('Enter Github Pass');

var m = require('mithril');
var GitHub = require('github-api');
var contributors = require('./contributors');

var label = {
  'JavaScript': '.label-warning',
  'Java': '.label-danger',
  'Swift': '.label-info'
};

function renderCards(repo) {
  if (!repo) { return; }

  var labelLanguage = label[repo.language] || '.label-default';

  return repo ? m('.card.col-sm-6.col-md-5.col-lg-4.col-xl-3', [
      m('.card-header.ncss-brand.u-capitalize.h4', [
        m('a', {
          href: repo.html_url,
          target: '_blank'
        }, m('img.card-img-top.card-img-top-project', {
          src: '/dist/img/icons/' + repo.name.toLowerCase() + '_no_txt.svg'
        })),
        repo.name.toUpperCase(),
        m('span.label.pull-xs-right' + labelLanguage, repo.language)
      ]),
      m('.card-block.card-block-project', [
        m('small.card-subtitle.text-muted', repo.full_name),
        m('p.card-text', repo.description.length > 114 ? repo.description.substr(0, 114) + ' ...' : repo.description) //,
      ]),
      m('.card-footer.text-muted', [
        m('span.label.label-default', 'Forks: ' + repo.forks),
        m.trust('&nbsp;'),
        m('span.label.label-default', 'Stars: ' + repo.stargazers_count),
        m('a.btn.btn-primary.pull-xs-right', {
          href: repo.html_url,
          target: '_blank'
        }, 'View Repo')
      ])
  ]) : '';
}

var repositories = {
  controller: function() {
    var ctrl = this;
    ctrl.repos = [];
    ctrl.contributors = [];
    ctrl.init = function(el, isInit) {
      if (!isInit) {
        ctrl.getRepos();
      }
    };
    ctrl.getRepos = function() {
      // var gh = new GitHub({
      //   username: process.env.GH_USER,
      //   password: process.env.GH_PASS
      // });
      var gh = new GitHub();

      var org = gh.getOrganization('nike-inc');

      org.listMembers()
          .then(function(res) {
            var members = res.data;
             ctrl.contributors = members;
          }).catch(function(err) {
            console.log('catch', err);
          });

      org.getRepos(function(err, repos) {
          ctrl.repos = repos;

          repos.map(function(repo) {
            var remoteRepo = gh.getRepo('nike-inc', repo.name);
            remoteRepo.getContributors(function(err, contributorsWrap) {
                contributorsWrap.map(function(contributor) {
                  ctrl.contributors.push(contributor.author);
                });
              });
          });
          m.redraw(true);
        })
        .catch(function(err) {
          console.log('catch', err);
        });
    };
  },
  view: function(ctrl) {
    return m('div', {
        id: 'content',
        config: ctrl.init
      },
      m('.container.card-deck-wrapper', {
          id: 'repos-container'
        },
        m('.row.card-deck',
          ctrl.repos.map(renderCards)
        )
      ),
      m.component(contributors, {contributors: ctrl.contributors})
    );
  }
};

module.exports = repositories;
