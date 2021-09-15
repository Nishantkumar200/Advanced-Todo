import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createNewItem,
  deleteTodoItem,
  editTodoItem,
  getAllItems,
} from "../../Actions/UserAction";
import moment from "moment";

function Todolist() {
  const { fetchedData } = useSelector((state) => state.login);

  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();
  const [date, setDate] = useState();
  const dispatch = useDispatch();

  console.log(fetchedData?._id);

  const handleAddItem = () => {
    dispatch(createNewItem(fetchedData?._id, title, detail, date));
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteTodoItem(itemId, fetchedData?._id));
  };

  const handleEditItem = (itemId) => {
    const newTitle = prompt("New Title");
    const newDuedate = prompt("New Title");
    const newDetail = prompt("New Title");

    dispatch(
      editTodoItem(itemId, fetchedData?._id, newTitle, newDuedate, newDetail)
    );
  };

  return (
    <>
      <div>My name is {fetchedData?.name}</div>
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

      <br />

      {fetchedData?.todos?.map((items) => (
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
