Graylog2 Maven Plugin Archetype
===============================

## Creating a new plugin project

```
$ mvn archetype:generate -DarchetypeGroupId=org.graylog2 -DarchetypeArtifactId=graylog2-plugin-archetype
```

### Complete example

```
$ mvn archetype:generate -DarchetypeGroupId=org.graylog2 -DarchetypeArtifactId=graylog2-plugin-archetype
[...]
[INFO] --- maven-archetype-plugin:2.2:generate (default-cli) @ graylog2-plugin-archetype ---
[INFO] Generating project in Interactive mode
[INFO] Archetype [org.graylog2:graylog2-plugin-archetype:0.90.0] found in catalog local
Define value for property 'groupId': : org.graylog2
Define value for property 'artifactId': : plugin-output-null
[INFO] Using property: version = 1.0.0-SNAPSHOT
Define value for property 'package':  org.graylog2: :
Define value for property 'pluginClassName':  : : NullOutput
Confirm properties configuration:
groupId: org.graylog2
artifactId: plugin-output-null
version: 1.0.0-SNAPSHOT
package: org.graylog2
pluginClassName: NullOutput
 Y: : y
[INFO] ----------------------------------------------------------------------------
[INFO] Using following parameters for creating project from Archetype: graylog2-plugin-archetype:0.90.0
[INFO] ----------------------------------------------------------------------------
[INFO] Parameter: groupId, Value: org.graylog2
[INFO] Parameter: artifactId, Value: plugin-output-null
[INFO] Parameter: version, Value: 1.0.0-SNAPSHOT
[INFO] Parameter: package, Value: org.graylog2
[INFO] Parameter: packageInPathFormat, Value: org/graylog2
[INFO] Parameter: package, Value: org.graylog2
[INFO] Parameter: version, Value: 1.0.0-SNAPSHOT
[INFO] Parameter: groupId, Value: org.graylog2
[INFO] Parameter: pluginClassName, Value: NullOutput
[INFO] Parameter: artifactId, Value: plugin-output-null
[INFO] project created from Archetype in dir: plugin-output-null
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
```

## Development

For running the locally built and installed Maven archetype you will have to add the `-DarchetypeCatalog=local` parameter.
Otherwise Maven tries to fetch the Maven archetype from the remote repository (i. e. Maven Central).

```
mvn archetype:generate -DarchetypeGroupId=org.graylog2 -DarchetypeArtifactId=graylog2-plugin-archetype -DarchetypeCatalog=local
```
