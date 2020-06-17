const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BloodPressureSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  systolic: {
    type: Number,
    min: [0, 'Must be more than 0'],
    max: [300, 'Must be less than 300'],
    required: [true, 'Please enter value']
  },
  diastolic: {
    type: Number,
    min: [0, 'Must be more than 0'],
    max: [200, 'Must be less than 200'],
    required: [true, 'Please enter value']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = BloodPressure = mongoose.model('BloodPressure', BloodPressureSchema);