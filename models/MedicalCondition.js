const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalConditionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  value: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = MedicalCondition = mongoose.model('MedicalCondition', MedicalConditionSchema);