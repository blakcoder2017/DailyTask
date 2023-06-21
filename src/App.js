import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ListTask from "./Components/LIstTask/ListTaks";
import AddTask from "./Components/AddTask/AddTask";
import ViewTask from "./Components/ViewTask/ViewTask";
import EditTask from "./Components/EditTask/EditTask";
function App() {
  return (
    <div className="container-main">
      <Router>
        <Header />
        <br />
        <div className="container">
          <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path="tasks" Component={ListTask}></Route>
            <Route path="add-task/:id" Component={AddTask}></Route>
            <Route path="edit-task/:id" Component={EditTask}></Route>
            <Route path="view-task/:id" Component={ViewTask}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
