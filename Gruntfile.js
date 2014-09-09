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
          src: ['**','!*.html','!partials/**']
        }]
      }
    },
    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    },
    includereplace: {
      main: {
        expand: true,
        dot: true,
        cwd: 'app',
        dest: 'dist',
        src: ['*.html']
      }
    },
    clean: ['dist/**']
  });

  //load in all the modules
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');  
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-contrib-clean');

  //register tasks
  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('build', ['clean','includereplace','copy']);

  grunt.registerTask('serve', ['watch']);
};