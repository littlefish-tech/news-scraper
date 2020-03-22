const router = require("express").Router();
const newsController = require("../../controllers/newsControllers")


//matches with "/api/news"
router.route("/")
    .get(newsController.findAll)
    .post(newsController.create);

//match with "/api/news/:id"

router
    .route("/:id")
    .get(newsController.findById)
    .delete(newsController.remove);

    module.exports = router;