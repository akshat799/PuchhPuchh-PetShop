const express = require("express");
const app = express();
var $ = require("jquery")

app.get("/" , (req,res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT , console.log("Server started on ${PORT}"));