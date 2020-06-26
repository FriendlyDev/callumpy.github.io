const mix = require("laravel-mix");

require("laravel-mix-tailwind");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .setPublicPath("./")
  .js(["src/js/app.js", "src/js/modernizr-custom.js"], "./js/app.js")
  .sass("src/scss/app.scss", "./css/app.css")
  .tailwind("./tailwind.config.js")
  .sourceMaps();

if (mix.inProduction()) {
  mix.version();
}
