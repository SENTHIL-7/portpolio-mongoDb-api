const express = require('express');
const cors = require('cors');
const config = require('./config/config');

const app = express();
const mongoose = require('mongoose')

mongoose.connect(config.mongodb_uri
);
// Middleware
app.use(cors());
app.use(express.json());

// Define your routes here
const v1 = require('./routes/v1');
app.use('/v1', v1);

const User = require("./models/User");
// User.create({
//   firstName: "senthil kumar",
//   lastName:"p",
//   email: "apsenthilkumar2001@gmail.com",
//   password:"password"
// })
//   .then(function (user) {
//     console.log(user);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

  // for testing purpose
  // if (CONFIG.app === 'local') {
  //   mongoose.connection.dropDatabase(() => {
  //     console.log('Dropped existing database');
  //     mongoose.connect(CONFIG.db_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  //       .then(() => console.log('Recreated database and collections'));
  //   });
  // }
// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});