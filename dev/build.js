const { myExecSync, removeDistFiles } = require('./utils');

removeDistFiles();

myExecSync('yarn webpack -p');
