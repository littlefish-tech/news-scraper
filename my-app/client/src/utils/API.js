import axios from "axios";

export default {
  // Gets all books
  getNews: function() {
    return axios.get("/api/news");
  },
  // Gets the book with the given id
  getNews: function(id) {
    return axios.get("/api/news/" + id);
  },
  // Deletes the book with the given id
  deleteNews: function(id) {
    return axios.delete("/api/news/" + id);
  },
  // Saves a book to the database
  saveNews: function(newsData) {
    return axios.post("/api/news", newsData);
  }
};
