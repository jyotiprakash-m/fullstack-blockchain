"use client";
import React, { useState } from "react";

const UpdateTask = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const closeModal = () => {
    setModalVisible(false);
    setModalContent("");
  };

  const updateTask = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="update_task todo_btn">
      <form onSubmit={updateTask}>
        <label>
          ID:
          <input id="taskID" />
        </label>
        <label>
          Name:
          <input id="taskName" />
        </label>
        <label>
          Date:
          <input id="taskDate" type="date" />
        </label>
        <button type="submit">Update Task</button>
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
  );
};

export default UpdateTask;
