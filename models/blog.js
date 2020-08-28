const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const blogSchema = new Schema({
   title: String,
   body: String
});

const blog = mongoose.model('blog', blogSchema);
module.exports = blog;