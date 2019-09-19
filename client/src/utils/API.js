import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    getBooks: function(title) {
        console.log(BASEURL + title)
        return axios.get(BASEURL + title);
    },
//Get books from the Google API
// getBooks: function() {
    // return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
    // return axios.get("https://www.googleapis.com/books/v1/volumes?q=")
    // return axios.get("/api/google", { params: { searchTerm: "title:" + searchTerm } });
// },


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