import axios from "axios";

export default {
  // Saves a book to the database
  saveUser: (userData) => {
    return axios.post("/api/signup", userData);
  },
  // Gets the user with the given id
  getUser: (id) => {
    return axios.get("/api/login" + id);
  },

  loadStockQuotes : (symbol) => {
    // return axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`);
    // return axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/ytd`);
    return axios.post("/api/stocks", symbol);
    // TODO:
    // [ ] Make API call for each stock symbol sent to this endpoint
    // [ ] 
  }
};

// EXAMPLE DATA TO MOCK UP:
// [
//   {
//     "id": "Google",
//     "color": "hsl(84, 70%, 50%)",
//     "data": [
//       {
//         "x": "2019-01-02",
//         "y": 135.68
//       },
//       {
//         "x": "2019-01-03",
//         "y": 135.68
//       },
//       {
//         "x": "YYY-MM-DD",
//         "y": close
//       },
//     ]
//   },
//   {
//     "id": "Apple",
//     "color": "hsl(69, 70%, 50%)",
//     "data": [
//       {
//         "x": "2019-01-02",
//         "y": 135.68
//       },
//       {
//         "x": "2019-01-03",
//         "y": 135.68
//       },
//       {
//         "x": "YYY-MM-DD",
//         "y": close
//       },
//     ]
//   },
//   {
//     "id": "Microsoft",
//     "color": "hsl(4, 70%, 50%)",
//     "data": [
//       {
//         "x": "2019-01-02",
//         "y": 135.68
//       },
//       {
//         "x": "2019-01-03",
//         "y": 135.68
//       },
//       {
//         "x": "YYY-MM-DD",
//         "y": close
//       },
//     ]
//   }
// ]