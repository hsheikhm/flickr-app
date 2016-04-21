(function(){
  "use strict";

  module.exports = function(grunt){
    grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),

      watch: {
        sass: {
          files: "app/css/sass/*.sass",
          tasks: ['sass']
        }
      },

      sass: {
        dev: {
          files: {
            "app/css/master.css" : "app/css/sass/master.sass"
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);

  };

}());
