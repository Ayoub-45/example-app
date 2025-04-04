const port = 3000;
const app = require("./app");
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
