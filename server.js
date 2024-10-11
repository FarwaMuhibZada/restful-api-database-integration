const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');

const app = express();
app.use(express.json());

// Routes

// Home Route
app.get('/', (req, res) => {
  res.send('Hello NODE API');
});

// Fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
    return null; // Ensuring consistent return
  }
});

// Fetch a user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    return null; // Ensuring consistent return
  }
});

// Update a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);

    // If user is not found
    if (!user) {
      return res.status(404).json({ message: `Cannot find any user with ID ${id}` });
    }

    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
    return null; // Ensuring consistent return
  }
});

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    // Replacing console.log with error logging
    res.status(500).json({ message: error.message });
  }
});

// Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: `Cannot find any user with ID ${id}` });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    return null; // Ensuring consistent return
  }
});

// MongoDB connection and server start
const dbUrl = 'mongodb+srv://admin:pwd1234@my-cluster.maxsh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=my-cluster';
mongoose.connect(dbUrl)
  .then(() => {
    // Replacing console.log with a logging function or removing
    console.info('Connected to MongoDB'); // Less intrusive than console.log
    app.listen(3000, () => {
      console.info('Node API app is running on port 3000');
    });
  })
  .catch((error) => {
    // Replacing console.log with error logging
    console.error(error);
  });
