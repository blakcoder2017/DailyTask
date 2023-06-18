import axios from "axios";

const apiUrl = "";

class Taskservice {
  getTasks() {
    console.log("get all task");
  }

  addTask(task) {
    console.log("Add a single task");
  }

  getTaskByID(taskID) {
    console.log("Get Task by ID");
  }

  updateTask(task, taskID) {
    console.log("update task");
  }

  deleteTask(taskID) {
    console.log("delete task");
  }
}

export default new Taskservice();
