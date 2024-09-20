const Post = require('./schema')
const express = require('express')
const router = express.Router()
router.post('/', async (req, res) => {
    try {
        const { title, content, isEditable } = req.body
        const addData = new Post({
            title,
            content,
            isEditable
        })
        await addData.save()
        console.log(addData)
        return res.status(201).json({message:'Post Created Successfully',addData})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const isData = await Post.findById(req.params.id)
        if (!isData) {
            return res.status(404).json({message:'Post Data not Found'})
        }
        const { title, content, isEditable } = req.body

        let editPost = await Post.findByIdAndUpdate(req.params.id, {
            title,
            content,
            isEditable
        })
        console.log(editPost)
        return res.status(200).json({message:'Post Updated Successfully',editPost})
    } catch (error) {
        return res.status(500).json({error:error.message})

    }
})

router.delete('/:id', async (req, res) => {
    try {
        const isData = await Post.findById(req.params.id)
        if (!isData) {
            return res.status(404).json({message:'Post Data not Found'})
        }

        let deletePost = await Post.findByIdAndDelete(req.params.id)
        console.log(deletePost)
        return res.status(200).json({message:'Post Deleted Successfully',deletePost})
    } catch (error) {
        return res.status(500).json({error:error.message})

    }
})

router.get('/', async (req, res) => {
  try {
      const productsData = await Product.find()
      console.log(productsData)
      return res.status(200).json({message:'All Posts',productsData})

  } catch (error) {
    return res.status(500).json({error:error.message})

  }  
})

router.get('/:id', async (req, res) => {
    try {
        const isData = await Post.findById(req.params.id)
        if (!isData) {
            return res.status(404).json({message:'Post Data not Found'})
        }

        let getPost = await Post.findById(req.params.id)
        console.log(getPost)
        return res.status(200).json({message:'Single post Data',getPost})
    } catch (error) {
        return res.status(500).json({error:error.message})

    }
})
module.exports=router