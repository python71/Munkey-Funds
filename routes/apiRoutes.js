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
routes.post("/api/stocks", function(req, res) {
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
			console.log(stockData);
			data.push(stockData);
			res.json(data);
		})
		.catch(err => console.log(err));
});
routes.post("/api/quote", function(req, res) {
	console.log("/api/quote endpoint hit");
	const { symbol } = req.body;
	console.log(symbol);
	let data = [];
	axios
		.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
		.then(response => {
			res.json(response.data);
		});
	// .catch(err => console.log(err));
});
module.exports = routes;
