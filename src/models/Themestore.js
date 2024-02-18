const mongoose = require('mongoose');

const themeStoreSchema = new mongoose.Schema({
  themeName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  themeLabel: {
    type: String,
    required: true,
    trim: true
  },
  themeImage: {
    type: String, // URL or GridFS storage
    required: true
  },
  homePage: {
    type: mongoose.Schema.Types.Mixed, // JSON object for home page structure
    required: true
  },
  aboutusPage: {
    type: mongoose.Schema.Types.Mixed, // JSON object for about us page structure
    required: true
  },
  contactusPage: {
    type: mongoose.Schema.Types.Mixed, // JSON object for contact us page structure
    required: true
  },
  modified: {
    type: Date,
    default: Date.now
  },
  created: {
    type: Date,
    default: Date.now
  }
});

const ThemeStore = mongoose.model('ThemeStore', themeStoreSchema);

module.exports = ThemeStore;