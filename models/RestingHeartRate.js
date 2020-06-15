const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestingHeartRateSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  value: {
    type: Number,
    min: 30,
    max: 300,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = RestingHeartRate = mongoose.model('RestingHeartRate', RestingHeartRateSchema);