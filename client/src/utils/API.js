import axios from "axios";
// import filterParams from "./filterParams";

export default {
  // Gets all applets
  getApplets: function () {
    return axios.get("/api/v1/applets/all");
  },
  // Gets an applet by name
  getAppletById: function (id) {
    return axios.get(`/api/v1/applets/id/${id}`);
  },
  // Gets all saved articles
  getSavedApplets: function () {
    return axios.get("/api/v1/applets/saved");
  },
  // Deletes the saved article with the given id
  //   deleteArticle: function(id) {
  //     return axios.delete("/api/articles/" + id);
  //   },
  // Saves an article to the database
  saveApplet: function (articleData) {
    return axios.post("/api/v1/applets/all", articleData);
  }
};