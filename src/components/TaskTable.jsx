import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function TaskTable() {
  const { tasks, setTasks } = useContext(GlobalContext);
  return (
    <div className="flex items-center p-7">
      {tasks.map((e, index) => (
        <p key={index}>{e.title}</p>
      ))}
    </div>
  );
}

export default TaskTable;
