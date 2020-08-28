var express = require('express');
var router = express.Router();
var blog = require('../models/blog.js')

router.post('/blogPost', async (request, response) => {
  try {
    var blogPost = new blog(request.body);
    var result = await blogPost.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/', async (request, response) => {
  try {
    var result = await blog.find().exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.get('/blogPost/:id', async (request, response) => {
  try {
    var blogPost = await blog.findById(request.params.id).exec();
    response.send(blogPost);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.put('/blogPost/:id', async (request, response) => {
  try {
    var blogPost = await blog.findById(request.params.id).exec();
    blogPost.set(request.body);
    var result = await blogPost.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});
router.delete('/blogPost/:id', async (request, response) => {
  try {
    var result = await blog.deleteOne({ _id: request.params.id }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;