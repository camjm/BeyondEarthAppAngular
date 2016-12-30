var fs = require('fs');     // a built-in node package

module.exports = function(grunt) {

  grunt.registerMultiTask('logger', 'general purpose logger', function() {
    var done = this.async();
    this.files.forEach(function(file) {
      var logFile = file.dest;
      var message = getMessage(file.message) + '\n';
      grunt.log.write('Logging \'%s\' in \'%s\'... ', message, logFile);
      fs.appendFile(logFile, message, function(err) {
        if (err) {
          grunt.log.error(err.message);
        } else {
          grunt.log.ok('Log successful');
        }
        done();
        return;
      });
    });
  });

  function getMessage(message) {
    if (typeof message === 'function') {
      return message();
    } else {
      return message;
    }
  }

};
