const mongoose = require('mongoose');

// Portfolio Schema
const portfolioSchema = new mongoose.Schema({
  portfolioName: {
    type: String,
    // required: true,
    trim: true,
    unique: true,
  },
  selectedThemeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ThemeStore', // Reference the Theme model (assuming you have one)
    // required: true
  },
  editThemeId:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'EditTheme', // Reference the Theme model (assuming you have one)
    // required: false
  }],
  publishThemeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PublishedTheme', // Reference the Theme model (assuming you have one)
    // required: false
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

// Create Mongoose models
const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// Optional: Populate user data when fetching portfolio
// Portfolio.pre('find', function (next) {
//   this.populate('userId');
//   next();
// });

module.exports =  Portfolio ;