const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    handle: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    birthday: {
      type: Date
    },
    bloodType: {
      type: String
    },
    height: {
      type: Number
    },
    sex: {
      type: String
    },
    organDonor: {
      type: Boolean
    },
    date: {
      type: Date,
      default: Date.now
    }
})

module.exports = User = mongoose.model('User', UserSchema);