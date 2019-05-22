const db = require("../models");
const routes = require("express").Router();
const axios = require("axios");

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
// get chart info
routes.post("/api/stocks", function(req, res) {
  console.log("/api/stocks endpoint hit");
  const { symbol } = req.body;
  console.log(symbol);
  let data = [];
  axios
    .get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/ytd`)
    .then(response => {
      let stockData = {
        id: symbol,
        data: []
      };
      response.data.forEach(item => {
        stockData.data.push({
          x: item.date,
          y: item.close
        });
      });
      console.log(response);
      data.push(stockData);
      res.json(data);
    })
    .catch(err => console.log(err));
});

// stock lookup
routes.post("/api/chart", function(req, res) {
  const { symbol } = req.body;
  axios
    .get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
    .then(response => {
      res.json(response.data);
    });
});

// multiple stock lookup
routes.post("/api/quotes", function(req, res) {
  const { symbol } = req.body;
  axios
    .get(
      `https://api.iextrading.com/1.0/stock/market/batch?symbols=${symbol}&types=quote,news,chart`
    )
    .then(response => {
      res.json(response.data);
    });
});

// routes.post("/api/login", function(req, res) {
//   console.log("LOGIN")
// })

// need to create a DB post if user saves a stock
//   db.Stocks.create({
//     stock: response.data.symbol,
//     value: response.data.open,
//     UserId: "1"
// })
//   .then(function(data) {
//     console.log(data);
//     // res.redirect(307, "/api/login");
//   })
//   .catch(function(err) {
//     console.log(err);
//     res.json(err);
//     // res.status(422).json(err.errors[0].message);
//   });

module.exports = routes;
