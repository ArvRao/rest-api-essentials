const express = require('express')

const router = express.Router()
const Post = require('../models/Post')

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
  })

  try {
    const newPost = await post.save()
    res.json(data)
  } catch (err) {
    res.json({ message: err })
  }
})

// GET request
router.get('/all', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
})

// GET SPECIFIC
router.get('/:postId', async (req, res) => {
  // console.log(req.params.postId)
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (err) {
    res.json(err)
  }
})

// DELETE A POST
router.delete('/:postId', async (req, res) => {
  try {
    const deletePost = await Post.remove({ _id: req.params.postId })
    res.json(deletedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

// UPDATE A POST
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: {
          title: req.body.title,
        },
      }
    )
    res.json(updatedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
