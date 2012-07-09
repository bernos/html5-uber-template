module.exports = function(grunt) {

  grunt.loadTasks("build/tasks");
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-less');

  grunt.initConfig({

    // Load project information for package.json
    pkg: '<json:package.json>',

    // Project meta data
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },

    lint: {
      all: [
        'grunt.js', 
        'src/js/main.js'
      ]
    },

    clean: {
      release: {
        src : ['dist/release']
      }
    },

    concat : {
      release : {
        src : ['<banner:meta.banner>', '<file_strip_banner:build/tmp/main.js>'],
        dest : 'dist/release/js/main-<%= pkg.version %>.js'
      } 
    },

    copy : {
      release : {
        src: ['src/index.html', 'src/js/lib/require-2.0.2.min.js', 'css', 'images'],
        dest: 'dist/release',
        strip: /^src/
      }
    },

    less : {
      release : {
        src : 'src/less/main.less',
        dest: 'dist/release/css/main.css',
        options: {
          compress: true
        }
      }
    },
    
    requirejs: {

      baseUrl: "src/js",
      paths: {
        jquery      : "lib/jquery-1.7.2.min",
        underscore  : "lib/underscore-1.3.3.min",
        backbone    : "lib/backbone-0.9.2.min",
        async       : "lib/requirejs-plugins/async",
        domready    : "lib/requirejs-plugins/domready"
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
      name: "main-@VERSION",
      out: "build/tmp/main.js"
            
    }
  });



  
  // Default task.
  grunt.registerTask('default', 'clean:release requirejs:js concat:release less:release copy:release');



};