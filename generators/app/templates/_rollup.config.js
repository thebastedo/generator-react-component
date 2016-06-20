var path = require('path');

var babel = require('rollup-plugin-babel');
var stylusCssModules = require('rollup-plugin-stylus-css-modules');

const BUILD_DIR = path.resolve(__dirname, 'lib');
const JS_BUILD_FILE = path.join(BUILD_DIR, '<%= className %>.js');
const CSS_BUILD_FILE = path.join(BUILD_DIR, '<%= className %>.css');

const APP_DIR = path.resolve(__dirname, 'src');
const APP_ENTRY = path.join(APP_DIR, '<%= className %>.js');

export default {
  moduleName: '<%= className %>',
  entry: APP_ENTRY,
  exports: 'named',
  dest: JS_BUILD_FILE,
  plugins: [
    babel({
      include: '**/*.js',
      exclude: 'node_modules/**',
      externalHelpers: true
    }),
    stylusCssModules({
      output: CSS_BUILD_FILE,
      sourceMap: false
    })
  ]
};
