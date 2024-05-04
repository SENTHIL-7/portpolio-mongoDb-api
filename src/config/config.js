require('dotenv').config();//instatiate environment variables
module.exports = {
    port: process.env.PORT || 3000,
    mongodb_uri: process.env.MONGODB_URI || 'mongodb://localhost/mydb',
    production:process.env.PRODUCTION || false
    // Add other configuration options here
  };