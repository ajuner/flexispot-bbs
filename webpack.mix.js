const mix = require("laravel-mix");

mix
  .js("resources/js/app.js", "public/js")
  .js("resources/cupload/js/cupload.js", "public/js")
  .sass("resources/sass/app.scss", "public/css")
  .version()
  .copyDirectory("resources/editor/js", "public/js")
  .copyDirectory("resources/editor/css", "public/css")
  .copyDirectory("resources/beagle", "public/beagle");
