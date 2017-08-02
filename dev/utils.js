const del =  require('del');
const execSync = require('child_process').execSync;

const myExecSync = (command) => {
  execSync(command,
    {
      stdio: 'inherit',
    });
};

const removeDistFiles = () => {
  del.sync(['dist/**']);
};


module.exports = {
  myExecSync,
  removeDistFiles,
};
