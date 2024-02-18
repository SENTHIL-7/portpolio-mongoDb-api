// Import any required models here
const Users = require('../models/User');

exports.getUsers = async () => {
    return await Users.find();
  
  };
exports.createUser = async (name) => {
const user = new Users(name );
return await user.save();
};
  
// Define your service methods
exports.getExamples = async () => {
  return await Example.find();

};


exports.createExample = async (name) => {
  const example = new Example({ name });
  return await example.save();
};
