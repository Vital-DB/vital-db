const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicalConditionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  medicalCondition: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = MedicalCondition = mongoose.model('MedicalCondition', MedicalConditionSchema);