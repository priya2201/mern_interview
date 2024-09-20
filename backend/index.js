const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const postRouter=require('./router')
const app = express()
let port=8000
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/posts',postRouter)
async function start() {
   try {
       await mongoose.connect('mongodb://localhost:27017/mern_next_posts')
       console.log('mongodb connected')
       await app.listen(port, () => {
           console.log('server listening')
       })
   } catch (error) {
    console.log(error)
   } 
}
start()