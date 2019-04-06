
module.exports = function(grunt){
    grunt.initConfig({
        concat:{
            js:{
                src: ['js/1.js', 'js/2.js',],
                dest: 'build/js/script.js',
            },

            css:{
                src: ['css/main.css', 'css/theme.css',],
                dest: 'build/css/styles.css',
            },
        },
        watch: {
            js: {
                files: ['js/*.js'],
                tasks: ['concat.js'],
            },

            css: {
                files: ['**/*.css'],
                tasks: ['jshint'],
            },
        },
    });

   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-watch');
};