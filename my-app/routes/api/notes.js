const router = require("express").Router();
const notesController = require("../../controllers/notesController")


//matches with "/api/news"
router.route("/")
    .get(notesController.findAll)
    .post(notesController.create);

//match with "/api/news/:id"

router
    .route("/:id")
    .get(notesController.findById)
    .delete(notesController.remove);

    module.exports = router;