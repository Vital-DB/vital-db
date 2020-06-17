const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestingHeartRateSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  value: {
    type: Number,
    min: [30, 'Must be more than 30'],
    max: [150, 'Must be less than 150'],
    required: [true, 'Please enter value']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = RestingHeartRate = mongoose.model('RestingHeartRate', RestingHeartRateSchema);