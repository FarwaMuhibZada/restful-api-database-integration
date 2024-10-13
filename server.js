// server.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Import the user routes

const app = express();
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  res.send('Hello NODE API');
});

// Use the user routes
app.use('/users', userRoutes);

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
