# html5 uber template

This is a handy starting point for html5 projects. It's bundled with bunch of handy javascript and css goodies to help kick-off your next html5 project. The template makes it super easy to get up and running the right way by setting up the following things for you

* A simple folder structure to keep your unbuilt/unoptimised source code separate from your actual built/distributable site
* Pre-written build script for grunt.js
* Less for dynamic css
* Requirejs for AMD module support
* Backbone.js for simple model/view support
* JQuery for DOM manipulation

# Dependencies

The only requirement is that node.js and npm must be installed. On windows you will also require a recent version of Python to be installed

# Starting out

Copy the content of the template to a fresh folder, and run ```npm install``` This will download all the dependencies required to for you to be able to build your project.

Do you work inside the /src folder, and build/optimise using ```/node_modules/.bin/grunt``` This will build your project and output it to /dist/release, ready for uploading.