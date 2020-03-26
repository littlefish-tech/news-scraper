import axios from "axios";

export default {
  // Gets all books
  getNews: function() {
    return axios.get("/api/news");
  },
  // Gets the book with the given id
  // getNews: function(id) {
  //   return axios.get("/api/news/" + id);
  // },
  // Deletes the book with the given id
  deleteNews: function(id) {
    return axios.delete("/api/news/" + id);
  },
  // Saves a book to the database
  saveNews: function(newsData) {
    return axios.post("/api/news", newsData);
  },

//   getNews: function() {
//     return axios.get("/api/news");
//   },
  // Gets the book with the given id
  getNotes: function(id) {
    return axios.get("/api/notes/" + id);
  },
  // Deletes the book with the given id
  deleteNews: function(id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a book to the database
  saveNote: function(notesData) {
    return axios.post("/api/notes", notesData);
  }

};
