const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AllergySchema = new Schema({
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

module.exports = Allergy = mongoose.model('Allergy', AllergySchema);