import packageJson from '../../package.json';
import { PluginManifest, PluginStore } from 'graylog-web-plugin/plugin';

PluginStore.register(new PluginManifest(packageJson, {}));
