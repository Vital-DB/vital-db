const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VitaminDSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  level: {
    type: Number,
    min: [10, 'Must be more than 10'],
    max: [500, 'Must be less than 500'],
    required: [true, 'Please enter value']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = VitaminD = mongoose.model('VitaminD', VitaminDSchema);