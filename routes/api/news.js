const router = require("express").Router();
const newsController = require("../../controllers/newsController");
const axios = require("axios");
const cheerio = require("cheerio");

console.log("@@@@@@@@@@@@@@@@api/news@#@@@@@@@@@@@@@@@@@@@@@@")

router.get("/", (req, res) => {
    axios
    .get("https://www.nytimes.com/section/technology").then(function(results){

    const $ = cheerio.load(results.data);
    // console.log(results.data)
    const articles = [];
    $("article h2").each((i, el) => { 
           // const result = {}; 
        // result.title = $(this)
        // .children("a")
        // .text;
        const title = $(el).children("a").text();
        const link = $(el).children("a").attr("href");
        // const summary = $(el).children("a").find(".css-1mpkbmj").text();
        // const image = $(el).children("a").next().attr("src");
        console.log(title);
        console.log(link);
        // console.log(summary)
        // console.log(image);
        // result.link = $(this)
        // .children("a")
        // .attr("href");
        articles.push({title, link});
        console.log(articles)
});

res.send("scrape complete");
res.json(articles);
    })
})

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