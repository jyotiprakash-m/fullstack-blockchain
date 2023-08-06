"use client";
import React, { useState } from "react";

const CreateTask = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const closeModal = () => {
    setModalOpen(false);
    setModalContent("");
  };

  const createTask = async (event) => {
    event.preventDefault();
  };
  return (
    <div class="create_task todo_btn">
      <form onSubmit={createTask}>
        <label>
          Name:
          <input id="taskName" />
        </label>
        <label>
          Date:
          <input id="taskDate" type="date" />
        </label>
        <button type="submit">Create Task</button>
      </form>

      {modalOpen && (
        <div class="modal">
          <div class="modal-content">
            <span class="close" onClick={closeModal}>
              &times;
            </span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTask;
