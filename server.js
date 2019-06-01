const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const db = require("./models");
const session = require("express-session")
const apiRoutes = require("./routes/apiRoutes");
const passport = require("passport");
const tf = require("@tensorflow/tfjs-node")

// const apiRoutes = require("./routes/apiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

app.use("/", apiRoutes)
// require("./routes/api-routes")(app)
// app.use("/", html-routes)(app)

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

module.exports = app;