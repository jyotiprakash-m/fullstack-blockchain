"use client";
import React, { useState } from "react";

const ViewAllTask = () => {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="view_all_tasks">
      {taskList.map((task) => {
        return (
          <div
            className="view_all_tasks_card"
            key={task.id}
            style={
              task.id !== "" && task.name !== "" && task.date !== ""
                ? {}
                : { display: "none" }
            }
          >
            <p>{task.taskId}</p>
            <p>{task.name}</p>
            <p>{task.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ViewAllTask;
