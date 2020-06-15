const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    weight: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
})

module.exports = Record = mongoose.model('Record', RecordSchema);