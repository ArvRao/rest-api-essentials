const Post = require('../models/Post')

exports.specificPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
    res.json(post)
  } catch (err) {
    res.json(err)
  }
}

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
}

exports.sendPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
  })

  try {
    const newPost = await post.save()
    res.json(newPost)
  } catch (err) {
    res.json({ message: err })
  }
}

exports.deletePost = async (req, res) => {
  try {
    const deletePost = await Post.remove({ _id: req.params.postId })
    res.json(deletedPost)
  } catch (err) {
    res.json({ message: err })
  }
}

exports.updatePost = async (req, res) => {
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
}
