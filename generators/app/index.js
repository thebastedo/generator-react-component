var generators = require('yeoman-generator');
var _ = require('lodash');
var chalk = require('chalk');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  prompting: {
    init: function () {
      this.log(
        '\n' + chalk.blue.underline.bold('React Component Generator') +
        '\n' +
        '\n This generator will setup a new ' + chalk.bold('React') + ' web component' +
        '\n using ' + chalk.bold('css modules, webpack, rollup, babel and stylus') +
        '\n'
      );

      return this.prompt([
        {
          type: 'input',
          name: 'humanName',
          message: 'What is the name of your component?',
          default: 'My Component'
        }
      ]).then(function (answers) {
        _.extend(this, answers);
        this.packageName = _.kebabCase(_.deburr(this.humanName));
        this.componentName = _.upperFirst(_.camelCase(this.humanName));
      }.bind(this));
    },

    naming: function () {
      return this.prompt([
        {
          type: 'input',
          name: 'className',
          message: 'What is the ' + chalk.bold('ClassName') + ' of your component?',
          default: this.componentName
        },
        {
          type: 'input',
          name: 'packageName',
          message: 'What is the ' + chalk.bold('npm package name') + ' of your component?',
          default: this.packageName
        },
      ]).then(function (answers) {
        _.extend(this, answers);
      }.bind(this));
    },

    user: function () {
      return this.prompt([
        {
          type: 'input',
          name: 'author',
          message: 'What is the ' + chalk.bold('author\'s name') + '?'
        },
        {
          type: 'input',
          name: 'gitUser',
          message: 'What is the author\'s ' + chalk.bold('GitHub User') + '?'
        }
      ]).then(function (answers) {
        _.extend(this, answers);
      }.bind(this));
    },

    project: function () {
      return this.prompt([
        {
          type: 'input',
          name: 'repoName',
          message: 'What is the GitHub ' + chalk.bold('Repo Name') + '?',
          default: this.packageName
        },
        {
          type: 'confirm',
          name: 'createDirectory',
          message: 'Create a new directory for this project?',
          defualt: true
        }
      ]).then(function (answers) {
        _.extend(this, answers);
        if (answers.createDirectory) {
  				this.destinationRoot(this.packageName);
  			}
      }.bind(this));
    }
  },

  configuring: {
    packageFile: function () {
      this.template('_package.json','package.json');
    },
    rollupFile: function () {
      this.template('_rollup.config.js', 'rollup.config.js');
    },
    webpackFile: function () {
      this.template('_webpack.config.js', 'webpack.config.js');
    },
    readmeFile: function () {
      this.template('_Readme.md', 'Readme.md');
    },
    eslintFile: function () {
      this.copy('eslintrc', '.eslintrc');
    },
    gitignoreFile: function () {
      this.copy('gitignore', '.gitignore');
    },
    babelrcFile: function () {
      this.copy('src/babelrc', 'src/.babelrc');
    }
  },

  writing: {
      demoFiles: function () {
        this.template('src/demo/_app.js', 'src/demo/app.js');
        this.template('src/demo/_index.html', 'src/demo/index.html');
      },
      componentFiles: function () {
        this.template('src/_Component.js', 'src/' + this.className + '.js');
        this.template('src/_Component.spec.js', 'src/' + this.className + '.spec.js');
        this.copy('src/_Component.styl', 'src/' + this.className + '.styl');
      }
  },

  install: function () {
    this.log(chalk.dim('installing npm packages...'));
    this.npmInstall();
  },

  end: function () {
    this.log(
        '\n' +
        '\n' + chalk.blue.underline.bold('React Component Generator') +
        '\n' + chalk.green.bold('Is now complete!') +
        '\n' +
        '\n You can now develop your project with this command:' +
        '\n\t' + chalk.bold('npm run dev') + ' or ' + chalk.bold('npm start') +
        '\n' +
        '\n You can now build your project for publishing with this command:' +
        '\n\t' + chalk.bold('npm run build') +
        '\n' +
        '\n You run the tests with this command:' +
        '\n\t' + chalk.bold('npm test') +
        '\n'
    );
  }
});
