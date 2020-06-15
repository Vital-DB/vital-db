const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeightSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  value: {
    type: Number,
    min: 10,
    max: 5000,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Weight = mongoose.model('Weight', WeightSchema);