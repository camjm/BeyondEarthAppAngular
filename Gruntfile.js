module.exports = function(grunt) {

    // Load the task plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Project configuration
    grunt.initConfig({
        jshint: {
            options: {
                curly: true,
                eqeqeq: true
            },
            all: ['Gruntfile.js', 'js/**/*.{js,json}']
        },
        // Compilation
        jade: {
            options: {
                pretty: true
            },
            app: {
                src: "src/views/app.jade",
                dest: "index.html"
            }
        },
        stylus: {
            app: {
                files: {
                    "css/main.css": "src/styles/app.styl"
                }
            }
        }
    });

    // Define the default task
    grunt.registerTask('default', ['jshint', 'jade', 'stylus']);

};
