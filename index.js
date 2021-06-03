'use strict';

const path = require('path');
const defaults = require('lodash.defaults');
const CoffeePreprocessor = require('./lib/coffee-preprocessor');

module.exports = {
  name: require('./package').name,

  getConfig: function () {
    return defaults(
      this.project.configWithoutCache(process.env.EMBER_ENV).coffeeOptions ??
        {},
      {
        blueprints: true,
      }
    );
  },

  blueprintsPath: function () {
    if (this.getConfig().blueprints) {
      return path.join(__dirname, 'blueprints');
    }
  },

  setupPreprocessorRegistry: function (type, registry) {
    const plugin = new CoffeePreprocessor(this.getConfig());

    registry.add('js', plugin);
  },
};
