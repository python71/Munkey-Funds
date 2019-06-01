const db = require("../models");
const routes = require("express").Router();
const axios = require("axios");

// CREATE NEW USER
routes.post("/api/users", function (req, res) {
  console.log(req.body);
  db.User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    goal: req.body.goal
  }).catch(function (err) {
      console.log(err);
      res.json(err);
    });
});

routes.get("/api/users", (req, res) => {
  db.User.find().then(
      (data) => {
          res.json(data);
      }
  ).catch(
      (err) => {
          res.json({error: err});
      }
  );
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
  axios
    .get(
      `https://cloud.iexapis.com/v1/stock/market/batch?token=pk_7dd5e2c663ec4be98e3743606acb40d3&symbols=${symbol}&types=chart&range=1m`
    )
    .then(response => {
      // console.log(response.data);
      for (let key in response.data) {
        let payLoad = {
          id: key,
          data: []
        };
        response.data[key].chart.forEach(dailyData => {
          payLoad.data.push({
            x: dailyData.date,
            y: dailyData.close
          });
        })
        data.push(payLoad);
      }
      console.log(data);
      res.json(data);
    })
    .then(err => console.log("NOOOOOOO!!!! Errors again."));
});


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
