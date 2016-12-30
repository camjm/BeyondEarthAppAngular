var request = require('request');      // an npm package
// see documentation for how to user the grunt logger: http://gruntjs.com/api/grunt.log

module.exports = function(grunt) {

  grunt.registerTask('webrequest', '', function() {
    var done = this.async();
    var url = grunt.config('webrequest.url');
    grunt.log.write('Requesting \'%s\'... ', url);
    request(url, function(err, response, contents){
      if (err) {
        grunt.log.error(err.message);
      } else if (response.statusCode !== 200) {
        grunt.log.error('Response %s %s', response.statusCode, response.statusMessage);
      } else {
        grunt.log.ok('Request successful');
      }
      done();
    });
  });

};
