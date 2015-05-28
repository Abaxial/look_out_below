var express = require("express")
var webServer = express()

webServer.set('view engine', 'jade')
webServer.use(express.static('assets'))

webServer.get("/", function(req, res) {
  res.render("index")
})

webServer.listen(9000)