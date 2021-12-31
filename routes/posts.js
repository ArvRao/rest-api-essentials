const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
let postController = require('../controllers/Posts')

// Send POST request
router.post('/', postController.sendPost)

// GET request
router.get('/', postController.getPosts)

// GET SPECIFIC
router.get('/:postId', postController.specificPost)

// DELETE A POST
router.delete('/:postId', postController.deletePost)

// UPDATE A POST, only updates the title
router.patch('/:postId', postController.updatePost)

module.exports = router
