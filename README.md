# Setup WordPress development environment

1. Run `docker-compose up -d` in root of directory with docker-compose.yaml file
2. Wait for all files to appear before visiting port: 8000 ie. [<http://localhost:8000/>](http://localhost:8000/)

## Begin plugin development

1. Navigate to wp-content -> `cd wp-content`
2. Open the plugins directory -> `cd plugins`
3. Create a new directory and name it after the plugin (e.g. plugin-name) -> `mkdir plugin-name`
4. Open the new plugin’s directory -> `cd plugin-name`.
5. Create a new PHP file (it’s also good to name this file after your plugin, e.g. plugin-name.php) -> `touch plugin-name.php`
