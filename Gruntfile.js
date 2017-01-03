module.exports = function(grunt) {

  // Runtime options
  var env = grunt.option('env') || 'dev';

  // Load the task plugins
  grunt.loadNpmTasks('main-bower-files');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-docco');
  grunt.loadTasks('./tasks');

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!<%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' * <%= pkg.homepage %>\n' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> */\n',
    // Pre-Compilation
    jshint: {
      options: {
        curly: true,
        eqeqeq: true
      },
      grunt: "Gruntfile.js",
      tasks: "tasks/**/*.js",
      test: "test/**/*.js"
    },
    clean: {
      all: ['build'],
      scripts: ['build/js'],
      styles: ['build/css'],
      views: ['build/views']
    },
    bower: {
      options: {
        checkExistence: true,
        debugging: true
      },
      dev: {
        dest: 'build/lib',
        options: {
          overrides: {
            bootstrap: {
              main: [
                "dist/js/bootstrap.js",
                "dist/css/bootstrap.css"
              ]
            }
          }
        }
      }
    },
    // Compilation
    jade: {
      options: {
        pretty: env !== 'prod',
        doctype: "html"
      },
      app: {
        src: "src/views/app.jade",
        dest: "build/index.html"
      },
      views: {
        expand: true,
        flatten: false,
        cwd: 'src/views/unit',
        src: "*.jade",
        dest: "build/views/unit",
        ext: '.html'
      },
      directives: {
        expand: true,
        flatten: false,
        cwd: 'src/scripts/directives',
        src: ['**/*.jade'],
        dest: 'build/js/directives',
        ext: '.html'
      }
    },
    coffee: {
      options: {
        bare: true,
        sourceMap: true
      },
      build: {
        expand: true,
        flatten: false,
        cwd: 'src/scripts/',
        src: ['**/*.coffee'],
        dest: 'build/js',
        ext: '.js'
      }
    },
    stylus: {
      options: {
        compress: env === 'prod'
      },
      app: {
        files: {
          "build/css/main.css": "src/styles/app.styl"
        }
      }
    },
    // Misc
    webrequest: {
      url: 'http://www.google.com' //TODO: make local address
    },
    logger: {
      deploy: {
        dest: 'deploy.log',
        message: function() {
          return 'Deployment on ' + new Date();
        }
      },
    },
    watch: {
      scripts: {
        files: 'src/scripts/**/*.coffee',
        tasks: ['clean:scripts', 'scripts']
      },
      styles: {
        files: 'src/styles/**/*.styl',
        tasks: ['clean:styles', 'styles']
      },
      views: {
        files: 'src/views/**.*.jade',
        tasks: ['clean:views', 'views']
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'build',
          open: true
        }
      }
    },
    docco: {
      debug: {
        src: ['src/**/*.coffee'],
        options: {
          output: 'build/docs'
        }
      }
    },
    // Optimization (use cssmin and htmlmin plugins too?)
    concat: { // concatenation should be done with coffee task?
      options: {
        banner: '<%= banner %>',
        stripBanners: true,
        sourceMap: true
      },
      dist: {
        src: 'build/js/**/*.js',
        dest: 'build/js/<%= pkg.name %>-<%= pkg.version %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        sourceMap: true,
      },
      dist: {
        src: 'build/js/<%= pkg.name %>-<%= pkg.version %>.js',
        dest: 'build/js/<%= pkg.name %>-<%= pkg.version %>.min.js'
      }
    }
  });

  // Environment specific tasks
  if (env === 'prod') {
    // Register tasks to compile and minify
    grunt.registerTask('scripts', ['coffee', 'concat:dist', 'uglify:dist']);
    grunt.registerTask('styles', ['stylus']); // cssmin?
    grunt.registerTask('views', ['jade']); // htmlmin?
  } else {
    // Register tasks to just compile
    grunt.registerTask('scripts', ['coffee']);
    grunt.registerTask('styles', ['stylus']);
    grunt.registerTask('views', ['jade']);
  }

  grunt.registerTask('build',
    'compiles the source files',
    ['views', 'scripts', 'styles']);

  grunt.registerTask('watching',
    'builds and watches the scripts, views, and styles files and compiles them',
    ['build', 'connect:server', 'watch']);

  // Define the default task
  grunt.registerTask('default',
    ['jshint', 'clean:all', 'bower:dev', 'build', 'docco:debug', 'logger:deploy', 'webrequest']);

};
