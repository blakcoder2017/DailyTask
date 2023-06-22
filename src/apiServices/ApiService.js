import axios from "axios";

const apiUrl = "http://localhost/myapi/api/task/";

class Apiservice {
  getTasks() {
    return axios.get(apiUrl + "read.php");
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

export default new Apiservice();
