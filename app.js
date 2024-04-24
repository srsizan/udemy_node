const express = require("express");
const bodyParsher = require("body-parser");
const app = express();

app.use(bodyParsher.urlencoded({ extended: false }));

app.post('/',(req, res, next) => {
  return res.send("<h1>User: " + req.body.username + "</h1>");
});
app.get("/", (req, res, next) => {
  res.send(
    '<form method="POST"><input type="Text" name="username"><button type = "submit">Create user</button></form>'
  );
});

app.listen(5000);
