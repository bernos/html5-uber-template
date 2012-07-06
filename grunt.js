module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    lint: {
      all: ['grunt.js', 'src/js/main.js']
    },
    
    requirejs: {
      baseUrl: "src/js",
      paths: {
        jquery :    "lib/jquery-1.7.2",
        underscore: "lib/underscore",
        backbone:   "lib/backbone"
      },
      shim: {
        backbone: {
          deps: ["jquery", "underscore"],
          exports: function()  {
            return Backbone.noConflict();
          }
        },
        underscore: {
          exports : function() {
            return _.noConflict();
          }
        }
      },
      name: "main",
      out: "src/js/main-built.js"
    }
  });



  grunt.loadNpmTasks('grunt-requirejs');
  // Default task.
  grunt.registerTask('default', 'lint:all requirejs');



};