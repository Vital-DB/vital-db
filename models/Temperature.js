const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemperatureSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  value: {
    type: Number,
    min: 1,
    max: 300,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Temperature = mongoose.model('Temperature', TemperatureSchema);