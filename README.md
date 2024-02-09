# Transaction Manager

## Description

Transaction Manager is a tool designed to track your daily income and expenses activities efficiently. It allows users to manage their financial transactions by adding, viewing, deleting income and expense records.

## Features

- User authentication (login and signup)
- Add income and expense entries
- View all transactions
- Delete selected transactions
- Delete all transactions

## Dependencies

- **Frontend**
  - React
  - Axios
  - React-dom
  - React-redux
  - React-router-dom
  - React-toastify
- **Backend**
  - Express
  - CORS
  - Bcrypt
  - Mongoose
- **State Management**
  - Redux

## Tools

- Yarn
- MongoDB Compass
- Visual Studio Code

## Installation

To set up the project locally, follow these steps:

1. Make a new repository clone to your api directory: `transaction-manager/api`
2. Install all dependencies (backend):

   `yarn add nodemon`

   `yarn add express`

   `yarn add mongoose`

   `yarn add cors`

   `yarn add bcryptjs`

3. Start the backend server:

`cd api`

`yarn dev`

## Project Structure

### Project Root Folder: `transaction-manager`

Contains all the frontend and backend code necessary for the application to run.

### API Folder: `api`

Holds all the backend code including the server setup, database configuration, models, routes, and utility functions.

#### `server.js`

Sets up the Express server, applies middleware like CORS and JSON parsing, connects to MongoDB, and starts listening on a specified port.

```javascript
import express from "express";
import cors from "cors";
import { connectMongo } from "./config/dbConfig.js";
import userRouter from "./router/userRouter.js";
import transactionRouter from "./router/transactionRouter.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

connectMongo();

app.use("/api/user", userRouter);
app.use("/api/transaction", transactionRouter);

app.listen(PORT, (error) => {
  error ? console.log("error") : console.log("Server is running.");
});
```

#### `config/dbConfig.js`

Configures the MongoDB connection using Mongoose.

```Javascript
import mongoose from "mongoose";

const mongo_db_url = "mongodb://localhost:27017/transaction-db"

export const connectMongo = () => {
  try {
    const connect = mongoose.connect(mongo_db_url)
    if(connect) {
      console.log("Database connected");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}

```

## Models and Schemas

Defines the schema for users and transactions, and provides functions to interact with the database for creating and finding users and transactions.

#### User Model (userModel.js):

Handles creating a user, finding a user by email, and finding a user by ID.

#### User Schema (userSchema.js):

Defines the user table schema in the database.

### Transaction Model (transactionModel.js):

Handles fetching all transactions for a logged-in user, creating a transaction, and deleting selected transactions.

### Transaction Schema (transactionSchema.js):

Defines the transaction table schema in the database.

## Routers

Defines the routes for user and transaction operations, applying middleware for authentication and using utility functions to send success or error responses.

### User Router (userRouter.js):

Routes for user signup and login.

### Transaction Router (transactionRouter.js):

Routes for getting all transactions, creating a transaction, and deleting transactions.

## Utility Functions

Includes helper functions for hashing passwords, comparing hashed passwords, and building success or error responses.

### Bcrypt Helper (bcryptHelper.js):

Functions for hashing a password and comparing a plain password with a hashed password.

### Response Helper (responseHelper.js):

Functions for building success or error responses to send back to the client.

## Usage

After installation, the application can be accessed at http://localhost:8000 endpoint.

## License

MIT
