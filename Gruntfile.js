module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //configure tasks
    jshint: {
    	files: ['*.js']
    },
    watch: {
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
        options: {
          reload: true,
          livereload: true
        }        
      },
      html: {
        files: ['*'],
        options: {
          reload: true,
          livereload: true
        }   
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'app',
          dest: 'dist',
          src: ['*']
        }]
      }
    },
    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    },
  });

  //load in all the modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');  

  //register tasks
  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('build', []);

  grunt.registerTask('serve', ['watch']);
};