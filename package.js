Package.describe({
  name: 'rocketchat:ldapjs',
  version: '1.0.0',
  summary: 'Meteor package wrapper for the ldapjs Npm module https://www.npmjs.com/package/ldapjs',
  git: 'https://github.com/RocketChat/meteor-ldapjs',
  documentation: 'README.md'
});

Npm.depends({
  ldapjs: "1.0.0",
});

Package.onUse(function (api) {

  api.add_files('lib/ldapjs.js', 'server');

  api.export('LDAPJS');
});
