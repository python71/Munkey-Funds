const db = require("../models");
const routes = require("express").Router();
const axios = require("axios");

routes.post("/api/stocks", function (req, res) {
  const { symbol } = req.body;
  console.log(symbol);
  let data = [];
  axios
    .get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/1m`)
    // .get('https://cloud.iexapis.com/v1/stock/${symbol}/chart/1m/?token=API_TOKEN')
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
      console.log(stockData);
      data.push(stockData);
      res.json(data);
    })
    .catch(err => console.log("You had an error."));
});

module.exports = routes;
