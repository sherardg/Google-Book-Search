const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//Matches with "/api/books"

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

//Matches for "/api/books/:id"

router
    .route("/:id")
    .get(booksController.findByID)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;