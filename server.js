const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/userModel')
app.use(express.json());

//Routes
app.get('/', (req, res) => {
  res.send('Hello NODE API');
});

// fetch data from Node-API database using this route
app.get('/users', async(req, res) => {
  try {
      const users = await User.find({});
      res.status(200).json(users);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

// get users by id 
app.get('/users/:id', async(req, res) =>{
  try {
      const {id} = req.params;
      const user = await User.findById(id);
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

app.post('/users', async(req, res) => {
  try {
      const user = await User.create(req.body)
      res.status(200).json(user);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
});

const dbUrl = 'mongodb+srv://admin:pwd1234@my-cluster.maxsh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=my-cluster';
mongoose.connect(dbUrl)
  .then(() => {
    console.log('connected to MongoDB');
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`);
    });
  }).catch((error) => {
    console.log(error)
  });