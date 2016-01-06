const PluginWebpackConfig = require('graylog-web-plugin').PluginWebpackConfig;
const path = require('path');
const BUILD_PATH = path.resolve(__dirname, 'build');
const ENTRY_PATH = path.resolve(__dirname, 'src/web/index.jsx');

module.exports = new PluginWebpackConfig('${package}.${pluginClassName}', { build_path: BUILD_PATH, entry_path: ENTRY_PATH });