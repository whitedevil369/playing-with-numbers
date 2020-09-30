const express = require("express");
var app = express();

var param1 = "1001"
var param2 = 371
var param3 = 7
var param4 = 12345
var param5 = 4

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
  res.json({
    result: armstrong(param2),
    meta: {
      success: true,
      code: 200
    }
  });
});

app.get("/prime", (req, res) => {
  res.json({
    result: prime(param3),
    meta: {
      success: true,
      code: 200
    }
  });
});

app.get("/rev", (req, res) => {
  res.json({
     result: reverse(param4),
    meta: {
      success: true,
      code: 200
    }
  });
});

app.get("/pattern", (req, res) => {
  res.json({
    result: pattern(param5),
    meta: {
      success: true,
      code: 200
    }
  });
});

