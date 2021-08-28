const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  friend: {
    type: String,
    required: true,
    trim: true
  },
  mention: {
    type: String,
    required: true
  }
});

const model = mongoose.model('Mentions', schema);

module.exports = model