const mongoose = require('mongoose');

const ThemeSchema = new mongoose.Schema({
  name: String,
  theme: String,
});

module.exports = mongoose.model('Theme', ThemeSchema);