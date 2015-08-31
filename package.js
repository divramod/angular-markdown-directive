// package metadata file for Meteor.js
var packageName = 'divramod:angular-markdown-directive';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'btf"s angular-markdown-directive" ';
var gitLink = 'https://github.com/divramod/angular-markdown-directive';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
    name: packageName,
    version: version,
    summary: summary,
    git: gitLink,
    documentation: documentationFile
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.2-rc.7'); // Meteor versions

    api.use('showdown@1.0.5-rc.0', where); // Dependencies

    api.addFiles('markdown.js', where); // Files in use
});
