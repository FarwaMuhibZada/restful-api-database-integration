# restful-api-database-integration 📟

## Overview 🎬

This project is a simple Node.js API built using Express and MongoDB. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on a user collection stored in a MongoDB database. The API interacts with a Mongoose model to manage user data, including fields such as name, age, phone number, and image. 

## Features 🎯

- **Create User**: Add a new user to the database.
- **Read Users**: Fetch a list of all users or retrieve a specific user by ID.
- **Update User**: Modify user information.
- **Delete User**: Remove a user from the database.

## Technologies 📢

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express**: A fast and minimalist web framework for Node.js.
- **MongoDB Atlas**: A NoSQL database used to store the user data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## DEMO 📺
[Deployment Link](https://basic-nodejs-server-9nqsu5y09-farwamuhibzadas-projects.vercel.app/)

## Installation and Setup 🔌

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/node-api.git
2. Install dependencies:

```bash
Copy code
cd restful-api-database-integration
npm install
```

3. Set up MongoDB:

Create a MongoDB cluster and get the connection string.
Replace the MongoDB connection URL in the dbUrl variable in the server.js file:
js
Copy code
const dbUrl = 'your-mongodb-connection-url';
Start the server:

```bash
Copy code
npm start
```
The server will run at http://localhost:3000.

## API Endpoints
### 1. Get all users
- Endpoint: /users
- Method: GET
- Description: Fetches all users from the database.

```bash
curl http://localhost:3000/users

```
### 2. Get a user by ID 👧
- Endpoint: /users/:id
- Method: GET
- Description: Fetches a user by their ID.

```bash
curl http://localhost:3000/users/{id}

```

### 3. Create a new user 👨‍🦰
- Endpoint: /users
- Method: POST
- Description: Creates a new user with the provided data.

```bash
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"John Doe", "age":25, "phoneNo":123456789}'

```
### 4. Update a user by ID 🤦‍♂️
- Endpoint: /users/:id
- Method: PUT
- Description: Updates an existing user's data.

```bash
curl -X PUT http://localhost:3000/users/{id} -H "Content-Type: application/json" -d '{"name":"Jane Doe", "age":30}'

```
### 5. Delete a user by ID 🧨
- Endpoint: /users/:id
- Method: DELETE
- Description: Deletes a user from the database by their ID.

```bash
curl -X DELETE http://localhost:3000/users/{id}
```
## Project Structure 📝
```bash
├── models/
│   └── userModel.js    # Mongoose schema for users
├── index.js            # Main entry point for the application
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Author

- **Farwa Muhibzada** - 

[GitHub Profile](https://github.com/FarwaMuhibZada)

[Linkdin](https://www.linkedin.com/in/farwamohibzada/)


### Contributing 🧑

Feel free to open issues or submit pull requests. Make sure to follow the project's code style and include tests for new features.
