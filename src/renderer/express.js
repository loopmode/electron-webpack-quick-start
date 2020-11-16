(function () {
  "use strict";
  let path = require("path");
  let express = require("express");
  let cors = require("cors");
  let app = express();

  app.use(cors());
  
  app.set("view engine", "ejs");
  app.set("views", path.join(__static, "./express/views"));

  app.get("/", function (req, res) {
    res.render("pages/index", {
      title: "Hello from Express",
      time: new Date().toLocaleString(),
      mascots: [
        { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
        { name: "Tux", organization: "Linux", birth_year: 1996 },
        { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
      ],
      tagline:
        "No programming concept is complete without a cute animal mascot.",
    });
  });

  app.get("/about", function (req, res) {
    res.render("pages/about", {
      title: "Another page",
      time: new Date().toLocaleString(),
    });
  });

  app.get("/api/status", function (req, res) {
    res.send({ status: "ok", time: Date.now() });
  });

  let server = app.listen(8080, function () {
    console.log("Express server listening on port " + server.address().port);
  });

  module.exports = app;
})();
