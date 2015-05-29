var express = require("express")
var webServer = express()
var game = require("./lib/game.js")

webServer.set('view engine', 'jade')
webServer.use(express.static('assets'))

webServer.get("/", function(req, res) {
  res.render("index", {Game: game.init()})
})

webServer.listen(9000)