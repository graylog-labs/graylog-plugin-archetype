const PluginWebpackConfig = require('graylog-web-plugin').PluginWebpackConfig;
const loadBuildConfig = require('graylog-web-plugin').loadBuildConfig;

module.exports = new PluginWebpackConfig('${package}.${pluginClassName}', loadBuildConfig('./build.config'), {
  // Here goes your additional webpack configuration.
});
