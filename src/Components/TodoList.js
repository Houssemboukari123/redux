import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import AddTasks from "./AddTasks";
import ListTasks from "./ListTasks";

const TodoList = () => {
  const taskList = useSelector((state) => state);
  const [filter, setFilter] = useState(false);
  const handleFilter = () => {
    setFilter(!filter);
  };
  return (
    <div>
      <AddTasks handleFilter={handleFilter} filter={filter} />
      <ListTasks
        taskList={filter ? taskList.filter((el) => el.isDone) : taskList}
      />
    </div>
  );
};

export default TodoList;
