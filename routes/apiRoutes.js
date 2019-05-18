const db = require("../models");
const routes = require("express").Router();

routes.post("/api/signup", function(req, res) {
  console.log(req.body);
  db.User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    goal: req.body.goal
  })
    .then(function(data) {
      console.log(data);
      res.redirect(307, "/api/login");
    })
    .catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
});

module.exports = routes;
