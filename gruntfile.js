'use strict';

module.exports = function gruntConfig(grunt) {

  grunt.initConfig ({

    clean: ['build/'],

    jshint:{
      source:{
        options:{
          jshintrc:'.jshintrc'
        },
        files:{
          src:['src/**/*.js']
        }
      }
    },

    copy: {
      copythehtml: {
        files: [
          {
            cwd: 'src/',
            src: ['*.html'],
            dest: 'build/',
            expand: true
          }
        ]
      },
      allImages: {
        files:[
          {
            cwd:'src/image',
            src:['*.png'],
            dest:'build/images/',
            expand: true
          }
        ]
      }
    },




    sass: {
      allSASS:{
        files:{
          'build/style.css' : 'src/sass/main.scss'
        }
      }
    },

    concat: {
      alljs: {
        options: {
          sourceMap: true
        },
        src: ['src/js/inventory.module.js', 'src/js/**/*.js'],
        dest: 'build/js/app.js'
      }
    },

    babel: {

      all: {
        options: {
          presets: ['es2015'],
          sourceMap: true
        },
        files: {
          'build/js/app.js': 'build/js/app.js'
        }
      }
    },

    karma: {

      all: {
        options : {
          frameworks: ['mocha', 'chai'],
          browsers: ['Chrome'],
          files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/js/inventory.module.js',
            'src/js/**/*.js',
            'test/**/*.spec.js'
          ],
          singleRun: true,
          preprocessors: {
            'src/js/**/*.js': ['dots', 'coverage'],
            coverageReporter: {
              type: 'text-summary'
            }
          }
        }




      }


    }



  });

require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', [ 'jshint','karma','clean', 'concat', 'babel','copy','sass' ]);



};
