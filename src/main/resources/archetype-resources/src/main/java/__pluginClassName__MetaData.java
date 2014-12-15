package ${package};

import org.graylog2.plugin.PluginMetaData;
import org.graylog2.plugin.Version;

import java.net.URI;

/**
 * Implement the PluginMetaData interface here.
 */
public class ${pluginClassName}MetaData implements PluginMetaData {
    @Override
    public String getUniqueId() {
        return "${package}.${pluginClassName}Plugin";
    }

    @Override
    public String getName() {
        return "${pluginClassName}";
    }

    @Override
    public String getAuthor() {
        // TODO Insert author name
        return "${pluginClassName} author";
    }

    @Override
    public URI getURL() {
        // TODO Insert correct plugin website
        return URI.create("https://www.graylog2.org/");
    }

    @Override
    public Version getVersion() {
        return new Version(1, 0, 0);
    }

    @Override
    public String getDescription() {
        // TODO Insert correct plugin description
        return "Description of ${pluginClassName} plugin";
    }

    @Override
    public Version getRequiredVersion() {
        return new Version(0, 93, 0);
    }
}
