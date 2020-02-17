const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
name: {
  type: String
  },
surname: {
  type: String
  },
email: {
  type: String},
age: {
type: Number},
  password: {
  type: String}
  })
module.exports = mongoose.model('user',userSchema);
