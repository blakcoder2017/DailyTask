import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../apiServices/ApiService";
import "./Home.css";

const Home = () => {
  const [allTask, setAllTask] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ApiService.getTasks().then((res) => {
      // console.log(res.data.data);
      setAllTask(res.data.data);
    });
  }, []);

  const AddTask = () => {
    navigate("add-task");
  };

  const editTask = (taskId) => {
    navigate("edit-task/".taskId);
  };
  return (
    <div className="container-main">
      <br />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="card">
              <div className="card-header">
                <a href="#" onClick={AddTask} className="btn btn-primary">
                  Add Task
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">All Tasks</h5>

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Description</th>
                      <th scope="col">Owner</th>
                      <th scope="col">Date Created</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTask.map((task) => (
                      <tr key={task.id}>
                        <td>{task.description}</td>
                        <td>{task.owner}</td>
                        <td>{task.created_at}</td>
                        <td>
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>
                          |
                          <button
                            onClick={() => {
                              navigate(`/edit-task/${task.id}`);
                            }}
                            type="button"
                            className="btn btn-primary"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-4">Log</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
