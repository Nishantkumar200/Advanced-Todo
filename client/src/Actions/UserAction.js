import axios from "axios";
import { URL } from "../commonUrl";

export const loginUser = (email, password,name) => async (dispatch) => {
  console.log(email, password,name);

  dispatch({
    type: "LOGIN_REQUEST",
    payload: { email, password,name },
  });

  try {
    const { data } = await axios.post(`${URL}/login`, { email, password,name });

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });

    console.log("User Data", data);
  } catch (error) {
    console.log(error);
  }
};

// Function to get All items

export const getAllItems = (userId) => async (dispatch) => {
  console.log("Usr Id", userId);

  dispatch({
    type: "TODO_ITEM_REQUEST",
    payload: userId,
  });

  try {
    const { data } = await axios.post(`${URL}/getItems`, { userId });

    dispatch({
      type: "TODO_ITEM_SUCCESS",
      payload: data,
    });

    console.log("Todo Items", data);
  } catch (error) {
    console.log(error);
  }
};

// Function to create new Items

export const createNewItem =
  (id, title, detail, dueDate) => async (dispatch) => {
    console.log(id, title, detail, dueDate);

    dispatch({
      type: "NEW_ITEM_REQUEST",
      payload: id,
    });

    try {
      const { data } = await axios.post(`${URL}/create`, {
        id,
        title,
        detail,
        dueDate,
      });

      dispatch({
        type: "NEW_ITEM_ADDED",
        payload: data,
      });

      console.log("New item added", data);
    } catch (error) {
      console.log(error);
    }
  };

// Function to edit the item

export const editTodoItem =
  (itemId,userId, newTitle, newDetail, newDuedate) => async (dispatch) => {
    console.log(itemId,userId, newTitle, newDuedate, newDetail);

    dispatch({
      type: "ITEM_EDIT_REQUEST",
      payload: { userId, itemId, newTitle, newDuedate, newDetail },
    });

    try {
      const { data } = await axios.put(`${URL}/edit/${itemId}/${userId}`, {
        newTitle,
        newDuedate,
        newDetail,
      });

      dispatch({
        type: "ITEM_EDIT_SUCCESS",
        payload: data,
      });

      console.log("Edited Data", data);
    } catch (error) {
      console.log(error);
    }
  };

// Function to Delete items from TODO

export const deleteTodoItem = (itemId,userId) => async (dispatch) => {
  console.log(itemId, userId);

  dispatch({
    type: "ITEM_DELETE_REQUEST",
    payload: { userId, itemId },
  });

  try {
    const { data } = await axios.delete(`${URL}/delete/${itemId}/${userId}`);

    dispatch({
      type: "ITEM_DELETE_SUCCESS",
      payload: data,
    });

    console.log("Deleted Data", data);
  } catch (error) {
    console.log(error);
  }
};
