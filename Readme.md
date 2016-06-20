# React Component Generator

### *STILL VERY MUCH A WORK IN PROGRESS*

A [Yeoman](http://yeoman.io) generator for authoring sharable react comopnents.
This generator makes use of [Webpack](https://webpack.github.io/), [Rollup](http://rollupjs.org/),
[Stylus](http://stylus-lang.com/), [CSS Modules](https://github.com/mtojo/rollup-plugin-stylus-css-modules),
and a few other tools. The goal of this is to provide a quick and easy setup for
building and sharing [React](https://facebook.github.io/react/). Other than the
build tools the aim is to keep it as unopinionated as possible.

## File Structure

```
my-component
  |-src
  |  |-demo
  |  |  |- app.js // Demo application file
  |  |  |- index.html // Demo application HTML file
  |  |- .babelrc // Babel configuration
  |  |- MyComponent.js // Main component entry file
  |  |- MyComponent.spec.js // Main component test file
  |  |- MyComponent.styl // Main component Stulus file
  |- .eslintrc
  |- .gitignore
  |- package.json
  |- Readme.md
  |- rollup.config.js
  |- webpack.config.js
```

# To Use

This assumes you already have the basic tools installed to run [Yeoman](http://yeoman.io)
generators.

## 1. Clone the repo
```bash
$ git clone git+ssh
```

## 2. Link the repo
```bash
$ cd generator-react-component
$ npm link
```

## 3. Run the generator
```bash
$ yo react-component
```

## 4. Run your component

Make sure you are in your component directory

```bash
$ cd my-component
```

and then run it with npm
```bash
$ npm start
```

# Building your component

To build your component for sharing run the following npm command to build the
library version.
```bash
$ npm run build
```

This will build the files and put them in the <code>lib/</code> folder.

# Development

This is pretty basic, we use webpack with babel and hot reloading to keep things
easy. You just run the following command and the dev server will be available at
<code>http://localhost:8000</code>.

```bash
$ npm start
```

# Testing

Right now [jest](https://facebook.github.io/jest/) is the provided testing framework,
althought configured a bit differently. Rather than looking for a <code>\_\_TESTS\_\_</code>
folder, it matches <code>src/**/*.spec.js</code>. Use the typical npm command to
run the tests.

```bash
$ npm test
```
