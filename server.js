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
    return res.status(200).json(users); // Explicit return to ensure a value is returned
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Return in case of error
  }
});

// Fetch a user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (user) {
      return res.status(200).json(user);
    }
    // Ensure a return statement even in this branch
    return res.status(404).json({ message: `No user found with ID ${id}` });
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Return in case of error
  }
});

// Update a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
      return res.status(404).json({ message: `Cannot find any user with ID ${id}` });
    }

    const updatedUser = await User.findById(id);
    return res.status(200).json(updatedUser); // Explicit return for success
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Return in case of error
  }
});

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).json(user); // Ensure return after success
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Return in case of error
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

    return res.status(200).json(user); // Explicit return for success
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Return in case of error
  }
});

// MongoDB connection and server start
const dbUrl = 'mongodb+srv://admin:pwd1234@my-cluster.maxsh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=my-cluster';
mongoose.connect(dbUrl)
  .then(() => {
    console.info('Connected to MongoDB');
    app.listen(3000, () => {
      console.info('Node API app is running on port 3000');
    });
  })
  .catch((error) => {
    console.error(error);
  });
