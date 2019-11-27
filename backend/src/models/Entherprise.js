const mongoose = require('mongoose');

const EntherpriseSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model('Entherprise', EntherpriseSchema);