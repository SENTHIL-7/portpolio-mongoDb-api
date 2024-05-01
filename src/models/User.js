const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    // required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: (value) => {
        // Regex or custom validation for email format
      },
      message: 'Invalid email format'
    }
  },
  phoneNumber: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    // required: true,
    // minlength: 8, // Enforce password strength
    select: false // Exclude from GET requests for security
  },
  modified: {
    type: Date,
    default: Date.now,
  },
  created: {
    type: Date,
    default: Date.now,
    immutable:true
  },
  portfolioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Portfolio', // Reference the Portfolio model
    // required: true
  }
});
const User = mongoose.model("User", userSchema);
module.exports = User;