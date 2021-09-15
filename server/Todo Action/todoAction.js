// Here we will define all the function e.g: create, delete , read etc.

import { UserModel } from "../Schema/userSchema.js";

// Fucntion for getting all todoItems

export const getAllTodoItems = async (req, res) => {

  const {userId} = req.body;

  const getAllItems = await UserModel.findById({
    _id: userId,
  });

  res.json(getAllItems);
  console.log(getAllItems);
};

// Function for creating new todo item
export const createTodoItem = async (req, res) => {
  const {  id,title, detail, dueDate } = req.body;

  console.log(id, title, detail, dueDate);

  try {
    const createNewItem = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        $addToSet: {
          todos: [
            {
              title: title,
              detail: detail,
              dueDate: dueDate,
            },
          ],
        },
      }
    );

    await createNewItem.save();
    res.json(createNewItem);
  } catch (error) {
    console.log(error);
  }
};

// Function for editing the todoItems
export const editTodoItem = async (req, res) => {
  
  const { itemId, userId } = req.params;
  const { title, detail, dueDate } = req.body;

  try {
    const updateItem = await UserModel.findOneAndUpdate(
      { _id: userId, "todos._id": itemId },
      {
        $set: {
          "todos.$.title": title,
          "todos.$.detail": detail,
          "todos.$.dueDate": dueDate,
        },
      }
    );

    res.status(200).json(updateItem);
  } catch (error) {
    console.log(error);
  }
};

// Function for deleting one items from TODO

export const deleteItem = async (req, res) => {
  
  const { itemId, userId } = req.params;

  console.log(itemId,userId,"This is backened");

  try {
    const deleteItem = await UserModel.findByIdAndUpdate(
      userId,
      {
        $pull: {
          todos: { _id: itemId },
        },
      },
      { multi: true }
    );

    res.json(deleteItem);
  } catch (error) {
    console.log(error);
  }
};
