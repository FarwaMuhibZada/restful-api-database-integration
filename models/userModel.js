const mongoose = require('mongoose');

// Define the user schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a product name'],
    },
    age: {
      type: Number,
      required: true,
      default: 18,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  },
);

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
