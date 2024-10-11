const express = require('express');
const app = express();
const mongoose = require('mongoose');
//Routes
app.get('/', (req, res) => {
  res.send('Hello NODE API');
});

const dbUrl = 'mongodb+srv://admin:pwd1234@my-cluster.maxsh.mongodb.net/?retryWrites=true&w=majority&appName=my-cluster';
mongoose.connect(dbUrl)
  .then(() => {
    console.log('connected to MongoDB');
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`);
    });
  }).catch((error) => {
    console.log(error)
  })