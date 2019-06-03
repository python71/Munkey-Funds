const db = require("../models");
const routes = require("express").Router();
const axios = require("axios");
require("dotenv").config("../.env");

// CREATE NEW USER
routes.post("/api/signup", function (req, res) {
  console.log(req.body);
  db.User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    goal: req.body.goal
  })
    .then(function (data) {
      console.log(data);
      res.redirect(307, "/api/login");
    })
    .catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
});

// // get chart info
// routes.post("/api/stocks", function (req, res) {
//   console.log("/api/stocks endpoint hit");
//   const { symbol } = req.body;
//   console.log(symbol);
//   let data = [];
//   axios
//     .get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/`)
//     .then(response => {
//       let stockData = {
//         id: symbol,
//         data: []
//       };
//       response.data.forEach(item => {
//         stockData.data.push({
//           x: item.date,
//           y: item.close
//         });
//       });
//       // console.log(response);
//       data.push(stockData);
//       res.json(data);
//     })
//     .catch(err => console.log(err));
// });

// // stock lookup
// routes.post("/api/chart", function (req, res) {
//   const { symbol } = req.body;
//   axios
//     .get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
//     .then(response => {
//       res.json(response.data);
//     });
// });


// multiple stock lookup
routes.post("/api/quotes", function (req, res) {
  console.log("/api/quotes endpoint hit.");
  const { symbol } = req.body;
  // console.log(symbol);
  let data = [];
  // db.Stocks.findAll({
  //   where: ({
  //     UserId: 3
  //   })
  // })
  //   .then(function (data) {
  //     console.log("Stock symbols from DB: ", data)
  //     res.redirect(307, "/api/login");
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //     res.json(err);
  //     // res.status(422).json(err.errors[0].message);
  //   });
  axios
    .get(
      `https://cloud.iexapis.com/v1/stock/market/batch?token=${process.env.API_KEY}&symbols=${symbol}&types=news,chart&range=1m`
    )
    .then(response => {
      // console.log(response.data);
      for (let key in response.data) {
        let payLoad = {
          id: key,
          data: [],
          news: []
        };
        // pulling the X and Y coordinates for the chart
        response.data[key].chart.forEach(dailyData => {
          payLoad.data.push({
            x: dailyData.date,
            y: dailyData.close
          });
        })
        data.push(payLoad);
        // pulls news data for the newsfeed
        response.data[key].news.forEach(dailyNews => {
          payLoad.news.push({
            relatedStock: dailyNews.related,
            headline: dailyNews.headline,
            link: dailyNews.url
          })
        })
      }
      // console.log(data);
      res.json(data);
    })
    .then(err => console.log("NOOOOOOO!!!! Errors again."));
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

  // adds users stock request into database
  routes.post("/api/saveQuote", function(req, res) {
    db.Stocks.create({
      stock: req.body.stock,
      UserId: req.body.UserId
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });    
  })

  routes.post("/api/getQuote", function(req, res) {
    console.log("/api/getQuote/ endpoint hit");
    console.log(req.body.UserId);
    db.Stocks.findAll({
         where: {
            UserId: req.body.UserId
         }
      }).then(function(user) {
         if (!user) {
             res.status(400).send({ error: "User not found." });
         }
         res.json(user);
      }).catch(err => console.log(err));
    })

module.exports = routes;
