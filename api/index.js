const express = require("express")
const app = express()

app.get("/annict/authenticate", function(req, res) {
  res.send("HelloWorld")
});

module.exports = {
  path: "/api/",
  handler: app
}