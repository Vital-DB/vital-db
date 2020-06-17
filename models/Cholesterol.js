const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CholesterolSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  LDL: {
    type: Number,
    min: 0,
    max: [150, 'Must be less than 150'],
    required: [true, 'Please enter value'],
  },
  HDL: {
    type: Number,
    min: 0,
    max: [100, 'Must be less than 100'],
    required: [true, 'Please enter value']
  },
  total: {
    type: Number,
    min: 0,
    max: [300, 'Must be less than 300'],
    required: [true, 'Please enter value']
  },
  triglycerides: {
    type: Number,
    min: 0,
    max: [200, 'Must be less than 200'],
    required: [true, 'Please enter value']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Cholesterol = mongoose.model('Cholesterol', CholesterolSchema);