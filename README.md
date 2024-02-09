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

### Add following dependencies using Yarn:

- Nodemon: `yarn add nodemon`
- Express: `yarn add express`
- Mongoose: `yarn add mongoose`
- Cors: `yarn add cors`
- Bcryptjs: `yarn add bcryptjs`

#

- Create server.js file inside 'api' folder
- In your VS Code terminal, run `yarn dev` command

#
