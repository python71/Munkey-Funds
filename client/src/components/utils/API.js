import axios from "axios";

export default {

  // USER ROUTES
  //-----------------------------
  // Saves a user to the database
  saveUser: userData => {
    return axios.post("/api/signup", userData);
  },
  // Gets the user with the given id
  getUser: id => {
    return axios.get("/api/login" + id);
  },



  // CHART ROUTES
  // ----------------------------------
  loadMultipleQuotes: (symbol) => {
    // makes a call to retrieve muliple quotes information
    return axios.post("api/quotes", symbol);
  },

};
