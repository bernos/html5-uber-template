/*! main.js */
require.config({
  paths: {
    jquery      : "lib/jquery-1.7.2.min",
    underscore  : "lib/underscore-1.3.3.min",
    backbone    : "lib/backbone-0.9.2.min",
    async       : "lib/requirejs-plugins/async",
    domready    : "lib/requirejs-plugins/domready"
  },

  shim: {
    backbone: {
      deps: ["underscore", "jquery"],
      exports: function()  {
        return Backbone.noConflict();
      }
    },
    underscore: {
      exports : function() {
        return _.noConflict();
      }
    }
  }
});

require(["config", "backbone"], function(config, Backbone) {
  console.log("READY...", config);
});