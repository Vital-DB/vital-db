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
    required: false,
  },
  HDL: {
    type: Number,
    min: 0,
    max: [100, 'Must be less than 100'],
    required: false
  },
  total: {
    type: Number,
    min: 0,
    max: [300, 'Must be less than 300'],
    required: false
  },
  triglycerides: {
    type: Number,
    min: 0,
    max: [200, 'Must be less than 200'],
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Cholesterol = mongoose.model('Cholesterol', CholesterolSchema);