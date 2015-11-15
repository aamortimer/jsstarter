var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument('appname', { type: String, required: true });

    // set the destinationRoot
    this.destinationRoot(this.appname);
  },

  install: function() {
    this.fs.copy(
      this.templatePath('.jshintrc'),
      this.destinationPath('.jshintrc')
    );

    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );

    this.fs.copy(
      this.templatePath('.bowerrc'),
      this.destinationPath('.bowerrc')
    );

    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
  }

});
