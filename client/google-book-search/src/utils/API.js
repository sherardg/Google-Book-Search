import axios from "axios";

export default {
//Get books from the Google API
getBooks: function(searchTerm) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
    // return axios.get("/api/google", { params: { q: "title:" + q } });
},

//Get saved books
getSavedBooks: function () {
    return axios.get("/api/books");
},

//Deletes the save book with the id
deleteBook: function(id) {
    return axios.delete("/api/books" + id);
},

//Saves a book to the database
saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
}

};