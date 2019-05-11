import axios from "axios";

export default {
  // Saves a book to the database
  saveUser: (userData) => {
    return axios.post("/api/signup", userData);
  },
  // Gets the user with the given id
  getUser: (id) => {
    return axios.get("/api/login" + id);
  }
};


