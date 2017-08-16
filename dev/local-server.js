const { app } = require('./../server/server');


const port = 4080;
const server = app.listen(port, () => {
  console.log(`listening: http://localhost:${port}`);
});

module.exports = {
  close: () => {
    server.close();
  },
};
