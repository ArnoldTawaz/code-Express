let express = require('express');
let app = express();
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  res.json({
    message: "Hello json".toUpperCase()
  });
  process.env.MESSAGE_STYLE;
});
console.log("Hello World");



































 module.exports = app;
