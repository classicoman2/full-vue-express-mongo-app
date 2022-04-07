const express = require('express');
const router = express();

const cyclistModel = require('../../models/cyclistModel');

/**
 * Get All
 */
router.get('/', async (req, res) => {

  console.log("get cyclists")

  const cyclists = await cyclistModel.find({});
  
  try {
    res.send(cyclists);
  } catch (err) {
    res.status(500).send(err);
  }
});


/**
 * Get by Name
 */
router.get('/:name', async (req, res) => {
  const cyclist = await cyclistModel.findByName(req.params.name);
  try {
    res.send(cyclist);
  } catch (err) {
    res.status(500).send(err);
  }
});


/** 
 * Add Post
 */
router.post('/', async (req, res) => {
  const cyclist = new cyclistModel(req.body);

  try {
    await cyclist.save();
    res.send(cyclist);
  } catch (err) {
    res.status(500).send(err);
  }
});


/**
 * Delete Post
 */
router.delete('/delete/:id', async (req, res) => {
  try {
    const cyclist = await cyclistModel.findByIdAndDelete(req.params.id)

    if (!cyclist) res.status(404).send("No ha trobat aquest item")
    res.status(200).send(`${cyclist.name} has been deleted`)
  } catch (err) {
    res.status(404).send(err)
  }
});



module.exports = router


