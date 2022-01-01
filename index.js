const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')
const cors = require('cors')
app.use(cors())

// Get all the routes
const PostRoute = require('./routes/posts')

app.use(express.json())

// add a custom middleware to all functions
const customMiddleWare = (req, res, next) => {
  console.log('Custom middleware is called')
  next() // refers to callback function
}
// app.use(customMiddleWare)
// next tells express middleware is done and must call next middleware function. All middlewares are called by app.use calls next().

app.use('/posts', PostRoute) // database post request middleware
// middleware is also called

// // ROUTES
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'home.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

// app.get('/about(.html)?', IntroRoutes.about)

app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'notFound404.html'))
})

// CONNECT TO DATABASE
mongoose.connect(process.env.IPADDRESS, () => {
  console.log('Connected to DB')
})

const PORT = process.env.PORT

app.listen(PORT, (req, res) => {
  console.log(`Server running at port ${PORT}`)
})
