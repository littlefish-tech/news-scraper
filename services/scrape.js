// const axios = require("axios");
// const cheerio = require("cheerio");

// module.exports = async (req, res) => {
//     const {topic, start, end} = req.query;

// try {
//     const data = await axios.get("https://www.nytimes.com/section/technology").then(function(response){

//     const $ = cheerio.load(response.data);
//     $("article h2").each(function(i, el){
//         const result = {};
//         result.title = $(this)
//         .children("a")
//         .text;

//         result.link = $(this)
//         .children("a")
//         .attr("href");

        

//     })

//     })
// }
// }