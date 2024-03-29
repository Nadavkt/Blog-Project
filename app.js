require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const port = 3000 || process.env.port;

app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use('/', require('./server/routes/main'));

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});
