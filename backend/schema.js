const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title: { type: String, },
    content: { type: String,},
    isEditable:{type:Boolean,default:true}
})
const Post = mongoose.model('Post', postSchema)
module.exports=Post