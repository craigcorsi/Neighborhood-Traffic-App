import axios from "axios";
// import filterParams from "./filterParams";

export default {
  // Gets articles from the NYT API
  getApplets: function(params) {
    return axios.get("/api/v1/");
  },
  // Gets all saved articles
  getSavedApplets: function() {
    return axios.get("/api/vi/");
  },
  // Deletes the saved article with the given id
//   deleteArticle: function(id) {
//     return axios.delete("/api/articles/" + id);
//   },
  // Saves an article to the database
  saveApplet: function(articleData) {
    return axios.post("/api/v1/", articleData);
  }
};