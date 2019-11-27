const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model('School', SchoolSchema);