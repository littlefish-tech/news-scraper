const router = require("express").Router();
const newsRoutes = require("./news");
const noteRoutes = require("./notes")

//News routes
router.use("/news", newsRoutes);
router.use("/notes", noteRoutes)

module.exports = router;