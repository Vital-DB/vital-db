const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BloodPressureSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  value: {
    type: Number,
    min: 1,
    max: 1000,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = BloodPressure = mongoose.model('BloodPressure', BloodPressureSchema);