const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const isProd = process.env.NODE_ENV != 'undefined' && (process.env.NODE_ENV === "production")
const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname,"./index.html"), "utf-8");
})();

app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

require("./build/dev-server.js")(app);

app.get('*', (req, res) =>{
  res.write(indexHTML);
  res.end()
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
