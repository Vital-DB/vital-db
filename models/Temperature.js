const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemperatureSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  degrees: {
    type: Number,
    min: [90, 'Must be more than 90'],
    max: [110, 'Must be less than 110'],
    required: [true, 'Please enter value']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Temperature = mongoose.model('Temperature', TemperatureSchema);