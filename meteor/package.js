Package.describe({
  name: 'mantarayar:difficulty-algorithms',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Difficulty algorithms built on networking protocols.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/MantarayAR/meteor-difficulty-algorithms/',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: '../README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('../src/difficulty-algorithm.js');
  api.addFiles('../src/tahoe.js');
  api.addFiles('../src/reno.js');
  api.addFiles('../src/linear.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mantarayar:difficulty-algorithms');
  api.addFiles('../tests/difficulty-algorithm-test.js');
  api.addFiles('../tests/reno-test.js');
  api.addFiles('../tests/tahoe-test.js');
  api.addFiles('../tests/linear-test.js');

});
