const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BloodPressureSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  systolic: {
    type: Number,
    min: 0,
    max: 300,
    required: true
  },
  diastolic: {
    type: Number,
    min: 0,
    max: 200,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = BloodPressure = mongoose.model('BloodPressure', BloodPressureSchema);