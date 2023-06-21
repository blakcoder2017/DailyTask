import axios from "axios";

const apiUrl = "";

class Movieservice {
  getTasks() {
    return axios.get(apiUrl);
  }

  addTask(task) {
    return axios.post(apiUrl, task);
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

export default new Movieervice();
