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
    max: 150,
    required: true
  },
  HDL: {
    type: Number,
    min: 0,
    max: 100,
    required: true
  },
  total: {
    type: Number,
    min: 0,
    max: 300,
    required: true
  },
  triglycerides: {
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

module.exports = Cholesterol = mongoose.model('Cholesterol', CholesterolSchema);