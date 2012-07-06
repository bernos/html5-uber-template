/*! main.js */
require.config({
  paths: {
    jquery 		: "lib/jquery-1.7.2",
    underscore	: "lib/underscore",
    Backbone 	: "lib/backbone",
    async		: "lib/requirejs-plugins/async",
    domready	: "lib/requirejs-plugins/domready"
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

});