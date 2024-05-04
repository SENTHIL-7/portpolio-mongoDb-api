const mongoose = require('mongoose');

const publishedThemeSchema = new mongoose.Schema({
    userPortfolioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Portfolio', // Reference the Theme model (assuming you have one)
        // required: false
    },
    themeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ThemeStore', // Reference the Theme model (assuming you have one)
        // required: true
    },
    themeName: {
        type: String,
        // required: true,
        // unique: true,
        trim: true
      },
      themeLabel: {
        type: String,
        // required: true,
        trim: true
      },
    homePage: {
        type: mongoose.Schema.Types.Mixed, // JSON object for home page structure
        // required: true
    },
    aboutusPage: {
        type: mongoose.Schema.Types.Mixed, // JSON object for about us page structure
        // required: true
    },
    contactusPage: {
        type: mongoose.Schema.Types.Mixed, // JSON object for contact us page structure
        // required: true
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

const UserTheme = mongoose.model('PublishedTheme', publishedThemeSchema);

module.exports = UserTheme;