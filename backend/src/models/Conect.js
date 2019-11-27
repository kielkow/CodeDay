const mongoose = require('mongoose');

const ConectSchema = new mongoose.Schema({
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School'
  },
  entherprise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entherprise'
  }
});

module.exports = mongoose.model('Conect', ConectSchema);