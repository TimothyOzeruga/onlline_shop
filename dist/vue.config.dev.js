"use strict";

module.exports = {
  configureWebpack: function configureWebpack(config) {
    config.optimization = {
      minimize: false
    };
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/final-project/' : '/'
};