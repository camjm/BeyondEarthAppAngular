module.exports = function (grunt) {

  // Load the task plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  // Project configuration
  grunt.initConfig({
    clean: {
      src: ['build']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true
      },
      all: ['Gruntfile.js', 'src/**/*.{js,json}', 'test/**/*.js'],
      json: "src/data/*.json"
    },
    // Compilation
    jade: {
      options: {
        pretty: true
      },
      app: {
        src: "src/views/app.jade",
        dest: "build/app.html"
      }
    },
    stylus: {
      app: {
        files: {
          "build/css/app.css": "src/styles/app.styl"
        }
      }
    }
  });

  // Define the default task
  grunt.registerTask('default', ['clean', 'jshint:all', 'jade', 'stylus']);

};
