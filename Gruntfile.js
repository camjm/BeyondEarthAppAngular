module.exports = function(grunt) {

    // Load the task plugins
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Project configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      banner:
        '/*! <%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* <%= pkg.homepage %>\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> */\n',
      jshint: {
          options: {
              curly: true,
              eqeqeq: true
          },
          grunt: "Gruntfile.js",
          test: "test/**/*.js"
      },
      clean: {
          src: ['build']
      },
      bower: {
        dev: {
          dest: 'build'
        }
      },
      // Compilation
      jade: {
          options: {
              pretty: true
          },
          app: {
              src: "src/views/app.jade",
              dest: "build/index.html"
          }
      },
      coffee: {
        options: {
          sourceMap: true
        },
        files: {}
      },
      stylus: {
          options: {
              compress: false
          },
          app: {
              files: {
                  "build/css/main.css": "src/styles/app.styl"
              }
          }
      },
      uglify: {
        options: {
          banner: '<%= banner %>',
          sourceMap: true,
          sourceMapIn: '<%= coffee.files.dest %>.map'
        },
        build: {
          src: 'build/something.js',
          build: 'build/something.min.js'
        }
      }
    });

    // Define the default task
    grunt.registerTask('default', ['jshint', 'clean', 'bower', 'jade', 'stylus', 'uglify']);

};
