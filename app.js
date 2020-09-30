var express = require("express");
var app = express();
const routes = require("express")
const bodyParser = require("body-parser");
const PORT = 3000

app.use(bodyParser.json());
app.use('/',routes);

app.listen(PORT, () => {
    console.log("Server Running on Port: ",PORT);
});
