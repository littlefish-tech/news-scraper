const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    image: {type: String, required: true },
    articalLink: { type: String, require: true }
})

const Notes = mongoose.model("News", noteSchema);

module.exports = Notes;