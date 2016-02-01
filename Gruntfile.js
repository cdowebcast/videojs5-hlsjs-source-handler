module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                src: 'lib/vjs-hls.js',
                dest: 'debug/vjs-hls.js',
                options:  {
                   transform: ['babelify'],
                   browserifyOptions: {
                       debug: true
                   },
                   watch: true,
                   keepAlive: true
               }
            }
        }
    });
}
