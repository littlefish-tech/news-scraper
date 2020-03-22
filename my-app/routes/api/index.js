const router = require("express").Router();
const newsRoutes = require("./news");
const noteRoute = require("./notes")

//News routes
router.use("/news", newsRoutes);
router.unsubscribe("/notes", noteRoute)

module.exports = router;