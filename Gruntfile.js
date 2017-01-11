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
        dest: 'build/lib',
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
        cwd: 'src/views',
        src: [
          "**/*.jade",
          "!**/_*.jade", // Don't compile the partials
          "!app.jade"], // The root app file can't be expanded in the same way
        dest: "build/views",
        ext: '.html'
      },
      directives: {
        expand: true,
        flatten: false,
        cwd: 'src/scripts',
        src: ['**/*.jade'],
        dest: 'build/js',
        ext: '.html'
      }
    },
    coffee: {
      dev: {
        expand: true,
        flatten: false,
        cwd: 'src/scripts/',
        src: ['**/*.coffee'],
        dest: 'build/js'
      },
      dist: {
        options: {
          join: true
        },
        src: ['**/*.coffee'],
        dest: 'build/js/app.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        sourceMap: true,
      },
      dist: {
        src: '<%= coffee.dist.dest %>',
        dest: 'build/js/app.min.js'
      }
    }
    sass: {
      options: {
        includePaths: ['bower_components/bootstrap-sass/assets/stylesheets']
      },
      dev: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          "build/css/main.css": "src/styles/app.scss"
        }
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          "build/css/main.css": "src/styles/app.scss"
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
      },
    },
    watch: {
      app: {
        files: [ 'src/**/*.{coffee,styl,jade}' ],
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
      debug: {
        src: ['src/**/*.coffee'],
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
    'Lints and compiles the source, then generates documentation'
    ['jshint', 'build', 'docco:debug', 'logger:deploy', 'webrequest']);

};
