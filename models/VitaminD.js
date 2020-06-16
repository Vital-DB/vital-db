const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VitaminDSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  value: {
    type: Number,
    min: 1,
    max: 100,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = VitaminD = mongoose.model('VitaminD', VitaminDSchema);