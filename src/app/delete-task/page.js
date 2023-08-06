"use client";
import React, { useState } from "react";

const DeleteTask = () => {
  const [task, setTask] = useState({ numId: null, name: null, date: null });
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const deleteTask = async (event) => {
    event.preventDefault();
  };
  const closeModal = () => {
    setModalVisible(false);
    setModalContent("");
  };
  return (
    <div className="delete_task todo_btn">
      <div>
        <form onSubmit={deleteTask}>
          <label>
            ID:
            <input id="taskID" />
          </label>
          <button type="submit">Delete Task</button>
        </form>
        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <p>{modalContent}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteTask;
