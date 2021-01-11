import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../js/const/ActionTasks";

const AddTasks = ({ handleFilter, filter }) => {
  const dispatch = useDispatch();
  const [myInput, setMyInput] = useState("");
  const handleChange = (e) => {
    setMyInput(e.target.value);
  };
  const add = ({}) => {
    if (myInput) {
      dispatch(addTask({ task: myInput, isDone: false, id: Math.random() }));
      setMyInput("");
    } else {
      alert("please enter a valid task");
    }
  };
  return (
    <div className="header">
      <h1>To-Do-List</h1>
      <input
        type="text"
        placeholder="enter a new task"
        onChange={handleChange}
        value={myInput}
      />
      <div className="btn">
        <button onClick={add}>Add</button>
        <button onClick={handleFilter}>{filter ? "done" : "All"}</button>
      </div>
    </div>
  );
};

export default AddTasks;
