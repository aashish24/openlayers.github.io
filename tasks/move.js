var fs = require('fs');

/** @param {Object} grunt Grunt. */
module.exports = function(grunt) {

  grunt.registerTask('move', 'Rename a directory', function(dest) {
    var done = this.async();

    var options = this.options({});
    var src = options.src;

    if (!src || !fs.statSync(src).isDirectory()) {
      return done(new Error('The "src" option must be an existing directory.'));
    }
    if (fs.existsSync(dest)) {
      return done(new Error('The "dest" must be a non-existent directory'));
    }

    fs.rename(src, dest, done);
  });

};
