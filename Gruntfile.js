module.exports = function(grunt) {

    // Load the task plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Project configuration
    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true
            },
            grunt: "Gruntfile.js"
        },
        clean: {
            src: ['build']
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

        },
        stylus: {
            options: {
                compress: false
            },
            app: {
                files: {
                    "build/css/main.css": "src/styles/main.styl"
                }
            }
        }
    });

    // Define the default task
    grunt.registerTask('default', ['jshint:grunt', 'clean', 'jade', 'coffee', 'stylus']);

};
