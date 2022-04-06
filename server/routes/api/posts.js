const express = require('express');
const app = express();
const mongodb = require('mongodb');
const mongoose = require('mongoose');

//const router = express.Router();

// Model creat a /models/post.js  -- xtoni
const postModel = require('../../models/postModel');

//const app = express();


/**
 * Get All
 */
app.get('/', async (req, res) => {
  const foods = await postModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});


/** 
 * Add Post
 */
app.post('/add', async (req, res) => {
  const post = new postModel(req.body);

  try {
    await post.save();
    res.send(post);
  } catch (err) {
    res.status(500).send(err);
  }
});


/**
 * Delete Post
 */
app.delete('/delete/:id', async (req, res) => {
  try {
    const post = await postModel.findByIdAndDelete(req.params.id)

    if (!post) res.status(404).send("No ha trobat aquest item")
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
});



module.exports = app


/* Codi de Brad Traversy que no funciona i he substituit pel de la web referenciada a index.js  -- xtoni */

// / se refereix a directori /api/routes  !!
/*
router.get('/', (req, res) => {
  res.send('hello');
});
*/
/*
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray())
});
*/
// Add Posts

// Delete Posts
/*
async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect
  ('', {
    useNewUrlParser: true
  });

  return client.db('vue_express').collection('posts');
}
*/

//module.exports = router; 