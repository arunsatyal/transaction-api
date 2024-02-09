# Welcome to Transaction Manager API

The Transaction Manager API is a robust platform powered by Express, Mongoose, Bcrypt, CORS, and Nodemon. This API is made for keep record of your daily financial transactions, all within a Node.js environment.

## Tools & Technologies

- HTML
- CSS
- Javascript
- React Bootstrap
- Node.js
- Express.js
- React
- Redux
- Mongodb

## Dependencies

Following are the major dependencies of the project:

- React
- Axios
- React-dom
- React-redux
- React-router-dom
- React-toastify
- Redux
- Bcrypt
- CORS
- Express
- Mongoose

## Prerequisites

Make sure:

- Node.js must be installed on the system.

- You should have MongoDB installed ([Download & Installation guide]("https://www.mongodb.com/try/download/community"))
- MongoDB Compass (Recommended) [Download & Installation Guide]("https://www.mongodb.com/try/download/compass)
- Visual Studio Code (VS Code) [Download]("https://code.visualstudio.com/download)

## Get Started

For this project, I used Yarn to add packages.

To install Yarn, run
`npm install --global yarn` in your VS Code terminal

Follow the steps to prepare:

- Create a project root folder 'transaction-manager' and make another folder in root folder named 'api'
- Open VScode terminal and navigate to the 'api' directory
- In terminal type command `npm init`. It generates a package.json file.
- Open package.json file and add following code:

```bash
"type": "module",
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```

### Install All Dependencies

Intall all dependencies using yarn:

    `yarn add nodemon`

    `yarn add express`

    `yarn add mongoose`

    `yarn add cors`

    `yarn add bcryptjs`

### Database Configuration

1. Create new folder named 'config' inside 'api' folder
2. Create new file 'dbConfig.js'
3. In dbConfig.js file, add following code to import Mongoose

```Javascript
import mongoose from "mongoose"
```

4. Define database URL name

```Javascript
const mongo_db_url = "mongodb://localhost:27017/transaction-db"
```

In above's code, "mongodb://localhost:27017/" is your mongodb server URL provided by mongodb. You need to install and run mongodb in your machine and 'transaction-db' is your database name. You can put your own database name or just follow this guidelines for your ease.

5. Now create a function to connect to your database server using try catch block

```Javascript
export const connectMongo = () => {
  try {
    const connect = mongoose.connect(mongo_db_url)
    if(connect) {
      console.log("Database conected");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
```

```Javascript

```

### Server Setup

1. Create server.js file inside 'api' folder
2. Import Express

```Javascript
import express from "express"
```

3. Import CORS

```Javascript
import cors from "cors"
```

4. Import connectMongo

```Javascript
import { connectMongo } from "./config/dbConfig.js";
```

- Express: Framework for building the server.
- CORS: Middleware to enable Cross-Origin Resource Sharing.
- connectMongo: Function to establish a connection with MongoDB.
- userRouter & transactionRouter: Routers to handle user and transaction-related - routes.
