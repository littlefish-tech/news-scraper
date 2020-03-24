const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    image: {type: String, required: true },
    articalLink: { type: String, require: true }
})

const News = mongoose.model("News", newsSchema);

module.exports = News;