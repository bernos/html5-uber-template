/**
 * Grunt task which cleans output folder
 */
module.exports = function(grunt) {

	var fs = require('fs');
	var p = require('path');

  function rmTree(path) {
  	//if (!fs.existsSync(path)) {
  	//	return;
  	//}

  	var files = fs.readdirSync(path);

  	if (!files.length) {
  		fs.rmdirSync(path);
  		return;
  	} else {
  		files.forEach(function(file) {
  			var fname = p.join(path, file);
  			if (fs.statSync(fname).isDirectory()) {
  				rmTree(fname);
  			} else {
  				fs.unlinkSync(fname);
  			}
  		});
  	}

  	fs.rmdirSync(path);
  }

  grunt.registerMultiTask("clean", "remove files from output directory.", function() {
    
    var files = grunt.file.expand(this.file.src);

    files.forEach(function(filename) {
      grunt.log.writeln("Deleting " + filename);
      var stats = fs.statSync(filename);

      if (stats.isDirectory()) {
      	//fs.rmdirSync(filename);
      	rmTree(filename);
      } else if (stats.isFile()) {
      	fs.unlinkSync(filename);
      }      
    });

  });
}