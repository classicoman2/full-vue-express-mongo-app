const mongoose = require('mongoose')

// xtoni Que és Schema?
//TODO Express: Investigar els [Schema](https://mongoosejs.com/docs/guide.html#statics) de _Mongoose_
const CyclistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value == '') throw new Error('El camp text no pot estar buid')
    },
  },
  birth_date: {
    type: Date,
    required: true,
    trim: true,
    validate(value) {
      if (value == '') throw new Error('El camp text no pot estar buid')
    },
  },
  weight: {
    type: Number,
    required: true,
    trim: true,
    validate(value) {
      if (value == '') throw new Error('El camp text no pot estar buid')
    },
  },
  height: {
    type: Number,
    required: true,
    trim: true,
    validate(value) {
      if (value == '') throw new Error('El camp text no pot estar buid')
    },
  },
})

/**
 * Mètode que he creat jo, seguint  https://mongoosejs.com/docs/guide.html#statics
 * Assigns a function to the "statics" object of an Schema
 *
 * @param {string} name  Expressió regular a buscar
 */
CyclistSchema.statics.findByName = function (name) {
  return this.find({ name: new RegExp(name, 'i') })
}

const Cyclist = mongoose.model('Cyclist', CyclistSchema)

//exports
module.exports = Cyclist
