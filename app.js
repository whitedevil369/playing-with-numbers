var express = require("express");
var app = express();
const routes = require("./routes/route.js")
const bodyParser = require("body-parser");
const PORT = 3000

app.use(bodyParser.json());
app.use('/app',routes);

app.listen(PORT, () => {
    console.log("Server Running on Port: ",PORT);
});
