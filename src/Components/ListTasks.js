import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../js/const/ActionTasks";
import ModalComponent from "./ModalComponent";

const ListTasks = ({ taskList }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setId(id);
  };
  const dispatch = useDispatch();

  return (
    <div className="main">
      {taskList.map((el) => (
        <div key={el.id} className="list">
          <span className={el.isDone ? "lineth" : "text"}>{el.task}</span>
          <button onClick={() => dispatch(completeTask(el.id))}>
            {!el.isDone ? "uncomplete" : "Complete"}
          </button>
          <button onClick={() => dispatch(deleteTask(el.id))}>Delete</button>
          <button onClick={() => handleShow(el.id)}>Edit</button>
        </div>
      ))}
      <ModalComponent
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        id={id}
      />
    </div>
  );
};

export default ListTasks;
