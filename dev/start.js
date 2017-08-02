const { myExecSync, removeDistFiles } = require('./utils');

removeDistFiles();

myExecSync('webpack -d');
myExecSync('webpack --watch -d & browser-sync start --config bs-config.js');
