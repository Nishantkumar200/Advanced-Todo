import express from "express";
import expressAsynHandler from "express-async-handler";
import {
  createTodoItem,
  getAllTodoItems,
  editTodoItem,
  deleteItem,
} from "../Todo Action/todoAction.js";

const todoRouter = express.Router();

// route for getting all todo items
todoRouter.post("/getAllItems", expressAsynHandler(getAllTodoItems));

// route for posting new todo Items
todoRouter.post("/create", expressAsynHandler(createTodoItem));

// route for editing a item in todo
todoRouter.put("/edit/:itemId/:userId", expressAsynHandler(editTodoItem));

// route for deleting a item from todo

todoRouter.delete("/delete/:itemId/:userId", expressAsynHandler(deleteItem));

export default todoRouter;
