import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createNewItem,
  deleteTodoItem,
  editTodoItem,
  getAllItems,
} from "../../Actions/UserAction";

import { useHistory } from "react-router-dom";
import moment from "moment";

function Todolist() {
  const { fetchedData } = useSelector((state) => state.login);
  const { todo } = useSelector((state) => state.todo);
  const userId = JSON.parse(localStorage.getItem("userId"));
  const history = useHistory();

  console.log("I am todo", todo);

  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();
  const [date, setDate] = useState();
  const dispatch = useDispatch();

  // console.log(fetchedData?._id);

  const handleAddItem = () => {
    dispatch(createNewItem(todo?._id, title, detail, date));
    window.location.reload();
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteTodoItem(itemId, todo?._id));
    window.location.reload();
  };

  const handleEditItem = (itemId) => {
    let newTitle = prompt("New Title");
    let newDetail = prompt("New Detail");
    dispatch(editTodoItem(itemId, todo?._id, newTitle, newDetail));
    
  };

  const handleLogOut = () => {
    localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    if (userId) {
      history.push("/todo");
    } else {
      history.push("/");
    }

    dispatch(getAllItems(userId));
  }, [userId]);
  return (
    <>
      <div>My name is {todo?.name}</div>
      <br />
      <input
        placeholder="Title"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Detail"
        type="text"
        onChange={(e) => setDetail(e.target.value)}
      />
      <input
        placeholder="Title"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Items</button>
      <button onClick={handleLogOut}>Log out</button>

      <br />

      {todo?.todos?.map((items) => (
        <>
          <div key={items._id}>
            <h1>{items?.title}</h1>
            <p> {items?.detail}</p>
            <p>Created At : {moment(items?.createdAt).format("MMM Do YY")}</p>
            <p>Due Date : {moment(items?.dueDate).format("MMM Do YY")}</p>
            <button onClick={() => handleDeleteItem(items._id)}>
              Delete Item
            </button>
            <button onClick={() => handleEditItem(items._id)}>
              Edit items
            </button>
          </div>
        </>
      ))}
    </>
  );
}

export default Todolist;
