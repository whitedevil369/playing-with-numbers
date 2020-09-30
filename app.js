var express = require("express");
var app = express();
app.listen(3000, () => {

    /*
    PLAINDROME: This a function which checks whether the given input is same,
    when read from right to left and left to right.
    Eg, IEEE-EEEI
    */

    function palindrome(str) {
        var re = /[^A-Za-z0-9]/g; //Some C00L Regular Expression stuffs
        str = str.toLowerCase().replace(re, '');
        var len = str.length;
        for (var i = 0; i < len / 2; i++) { //first letter is compared to last letter and second to second last and so on
            if (str[i] !== str[len - 1 - i]) { //if any one is not equal
                return "It's not a Palindrome"; //not a palindrome
            }
        }
        return "It's a Palindrome"; //Otherwise It's a palindrome
    }

    function armstrong(num) {
        var temp;
        var rem;
        var sum = 0;
        temp = num;
        while (num > 0) {
            rem = num % 10;
            sum = sum + rem ** 3;
            num = parseInt(num / 10);
        }
        if (sum == temp) {
            return "It's an Armstrong";
        } else {
            return "It's not an Armstrong";
        }
    }

    function prime(n) {

        if (n === 1) {
            return "It's neither prime nor composite";
        } else if (n === 2) {
            return "It's a prime number";
        } else {
            for (var x = 2; x < n; x++) {
                if (n % x === 0) {
                    return "It's not a prime number";
                }
            }
            return "It's a prime number";
        }
    }

    function reverse(n) {
        n = n + "";
        return n.split("").reverse().join("");
    }

    function pattern(n) {

        var num = "";
        for (var i = 1; i <= n; i++) {
            num = num + i
            console.log(num)

        }
        return num;
    }

    /*
    function fibonacci {

    }
    */

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
/*
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
    */
    console.log("Server running on port 3000");
});
