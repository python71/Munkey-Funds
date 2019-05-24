import axios from "axios";

export default {
  // Saves a book to the database
  saveUser: (userData) => {
    return axios.post("/api/signup", userData);
  },
  // Gets the user with the given id
  getUser: (id) => {
    return axios.post("/api/login", id);
  },

  loadStockQuotes : (symbol) => {
    // return axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`);
    // return axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/ytd`);
    return axios.post("/api/stocks", symbol);
    // TODO:
    // [ ] Make API call for each stock symbol sent to this endpoint
    // [ ] 
  },

  loadChartInfo : (symbol) => {
    // makes a call to retrieve chart information
    return axios.post("api/chart", symbol);
  },

  loadMultipleQuotes : (symbol) => {
    // makes a call to retrieve muliple quotes information
    return axios.post("api/quotes", symbol);
  },

  // saveQuote : (quoteInfo) => {
    // saves a quote for a single quote
  //   return axios.post("/api/chart", userData);
  // }
};