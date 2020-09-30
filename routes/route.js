const express = require("express");
var app = express();

app.get("/pal", (req, res) => {
  res.json({
    result: palindrome(param1),
    meta: {
      success: true,
      code: 200
    }
  });
});

app.get("/arm", (req, res) => {
 //Add Your Code Here
});

app.get("/prime", (req, res) => {
 //Add Your Code Here
});

app.get("/rev", (req, res) => {
 //Add Your Code Here
});

app.get("/pattern", (req, res) => {
 //Add Your Code Here
});

app.get("/fibo", (req, res) => {
 //Add Your Code Here
});
