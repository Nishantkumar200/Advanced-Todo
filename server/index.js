//  const express = require('express');
import express from "express";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import todoRouter from "./router/todoRouter.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./router/userRouter.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

// Check whether database connection is connected successfully or not
const db = mongoose.connect(process.env.MONGODB_URI);

db.then(() => console.log("Successfully connected to the databse")).catch(
  (err) => console.log("Response", err)
);

// This is for testing of main server route
app.get("/", (req, res) => {
  res.send("Server is working fine");
});

// All todo Route will go inside the todoRouter
app.use(todoRouter);

// All user Router

app.use(userRouter);

// Currently application is running on PORT = 5000
app.listen(PORT, () => console.log("Server is started on 5000"));
