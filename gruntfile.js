(function(){
  "use strict";

  module.exports = function(grunt){
    grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),

      concat: {
        options: {
          separator: ';'
        },
        dist: {
          src: ['app/js/*.js'],
          dest: 'dist/<%= pkg.name %>.js'
        }
      },

      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
          files: {
            'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
          }
        }
      },

      jshint: {
        files: ['gruntfile.js', 'app/js/*.js', 'test/**/*.js'],
        options: {
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        }
      },

      sass: {
        dev: {
          files: {
            "app/css/master.css" : "app/css/sass/master.sass"
          }
        }
      },

      watch: {
        sass: {
          files: "app/css/sass/*.sass",
          tasks: ['sass']
        },
        app: {
          files: ['<%= jshint.files %>'],
          tasks: ['jshint']
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass']);

  };

}());
