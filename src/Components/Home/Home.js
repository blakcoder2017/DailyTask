import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-main">
      <br />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <ul>
              <li>List 1</li>
              <li>List 2</li>
              <li>List 3</li>
              <li>List 4</li>
            </ul>
          </div>
          <div className="col-4">Log</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
