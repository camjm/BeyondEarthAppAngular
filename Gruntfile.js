module.exports = function(grunt) {

    // Load the task plugins
    grunt.loadNpmTasks('main-bower-files');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner:
            '/*!<%= pkg.name %> -v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' * <%= pkg.homepage %>\n' +
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> */\n',
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
                base: 'bower_components',
                dest: 'build/lib',
                options: {
                    checkExistence: true,
                    debugging: true,
                    paths: {
                        bowerDirectory: 'bower_components',
                        bowerrc: '.bowerrc',
                        bowerJson: 'bower.json'
                    }
                }
            },
            flat: {
                dest: 'build/lib',
                options: {
                    debugging: true
                }
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
                compress: false
            },
            app: {
                files: {
                    "build/css/main.css": "src/styles/app.styl"
                }
            }
        }
    });

    // Define the default task
    grunt.registerTask('default', ['jshint', 'clean', 'bower:flat', 'jade', 'coffee', 'stylus']);

};
