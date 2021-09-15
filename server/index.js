//  const express = require('express');
import express from "express";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import todoRouter from "./router/todoRouter.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import cors from 'cors';
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

// Check whether database connection is connected successfully or not
mongoose
  .connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.8qoj1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => console.log("Successfully connected to the databse"))
  .catch((err) => console.log(err.response));


  // This is for testing of main server route
app.get("/", (req, res) => {
  res.send("Server is working fine");
});


// All todo Route will go inside the todoRouter
app.use(todoRouter);

// All user Router

app.use(userRouter)

// Currently application is running on PORT = 5000
app.listen(PORT, () => console.log("Server is started on 5000"));
