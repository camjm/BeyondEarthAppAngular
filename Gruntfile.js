module.exports = function(grunt) {

  // Runtime options
  var env = grunt.option('env') || 'dev';

  // Load the task plugins
  grunt.loadNpmTasks('main-bower-files');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');
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
      all: ['build']
    },
    bower: {
      options: {
        checkExistence: true
      },
      dev: {
        dest: 'build/assets/lib',
        options: {
          overrides: {
            'bootstrap-sass': {
              ignore: true
            }
          }
        }
      }
    },
    // Compilation
    jade: {
      options: {
        pretty: true,
        doctype: "html"
      },
      build: {
        expand: true,
        flatten: false,
        cwd: 'src',
        src: [
          "**/*.jade",
          // Don't compile the partials
          "!**/_*.jade"],
        dest: "build",
        ext: '.html'
      }
    },
    coffee: {
      dev: {
        expand: true,
        flatten: false,
        cwd: 'src',
        src: ['**/*.coffee'],
        dest: 'build',
        ext: '.js'
      },
      dist: {
        options: {
          join: true
        },
        src: ['src/**/*.coffee'],
        dest: 'build/app.src.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        sourceMap: true,
      },
      dist: {
        src: '<%= coffee.dist.dest %>',
        dest: 'build/app.min.js'
      }
    },
    sass: {
      options: {
        includePaths: ['bower_components/bootstrap-sass/assets/stylesheets']
      },
      dev: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          "build/assets/css/main.css": "src/styles/app.scss"
        }
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          "build/assets/css/main.css": "src/styles/app.scss"
        }
      }
    },
    // Misc
    logger: {
      deploy: {
        dest: 'deploy.log',
        message: function() {
          return 'Deployment on ' + new Date();
        }
      }
    },
    watch: {
      app: {
        files: [ 'src/**/*.{coffee,scss,jade}' ],
        tasks: ['build']
      }
    },
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'build',
          open: true
        }
      }
    },
    docco: {
      app: {
        src: ['src/**/*.coffee'],
        options: {
          output: 'build/docs'
        }
      },
      grunt: {
        src: 'Gruntfile.js',
        options: {
          output: 'build/docs'
        }
      }
    },
    copy: {
      data: {
        expand: true,
        cwd: 'data',
        src: '**/*.json',
        dest: 'build/data'
      }
    }
  });

  // Environment specific tasks
  if (env === 'prod') {
    // Register tasks to compile and minify
    grunt.registerTask('scripts', ['coffee:dist', 'uglify:dist']);
    grunt.registerTask('styles', ['sass:dist']);
    grunt.registerTask('views', ['jade']); // htmlmin?
  } else {
    // Register tasks to just compile
    grunt.registerTask('scripts', ['coffee:dev']);
    grunt.registerTask('styles', ['sass:dev']);
    grunt.registerTask('views', ['jade']);
  }

  grunt.registerTask('build',
    'compiles the source files',
    ['clean:all', 'bower:dev', 'views', 'scripts', 'styles']);

  grunt.registerTask('server',
    'Starts a simple express file server',
    ['build', 'copy:data', 'connect:server']);

  grunt.registerTask('watching',
    'Watches the scripts, views, and styles files and compiles them',
    ['server', 'watch']);

  // Define the default task
  grunt.registerTask('default',
    ['jshint', 'build', 'docco', 'logger:deploy']);

};
