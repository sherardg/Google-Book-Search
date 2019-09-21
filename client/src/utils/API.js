import axios from "axios";

export default {
    getBooks: function(q) {
        return axios.get("/api/google", { params: { q: "title:" + q } });
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