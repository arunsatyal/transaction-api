import express from "express";
import cors from "cors";
import { connectMongo } from "./config/dbConfig.js";

//Import router
import userRouter from "./router/userRouter.js";
import transactionRouter from "./router/transactionRouter.js";

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to DB
connectMongo();

app.use("/api/user", userRouter);
app.use("/api/transaction", transactionRouter);
//

// Start the server
app.listen(PORT, (error) => {
  error ? console.log("error") : console.log("Server is running.");
});
