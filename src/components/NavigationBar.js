import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <header>
      <div class="logo">TODO 3.O</div>
      <nav>
        <ul>
          <li>
            <a class="nav_link" href="/">
              Wallet
            </a>
          </li>
          <li>
            <a class="nav_link" href="/view-all-tasks">
              View All Tasks
            </a>
          </li>
          <li>
            <a class="nav_link" href="/create-task">
              Create Task
            </a>
          </li>
          <li>
            <a class="nav_link" href="/view-task">
              View Task
            </a>
          </li>
          <li>
            <a class="nav_link" href="/update-task">
              Update Task
            </a>
          </li>
          <li>
            <a class="nav_link" href="/delete-task">
              Delete Task
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
