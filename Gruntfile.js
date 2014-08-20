module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //configure tasks
    jshint: {
    	files: ['*.js']
    },
    watch: {
    	files: ['<%= jshint.files %>'],
    	tasks: ['jshint']
    }
  });

  //load in all the modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //register tasks
  grunt.registerTask('default', ['jshint'])
};