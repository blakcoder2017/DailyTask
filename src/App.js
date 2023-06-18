import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="container-main">
      <Header />
      <br />
      <div class="container">
        <div class="row">
          <div class="col-8">Main</div>
          <div class="col-4">Log</div>
        </div>
      </div>
    </div>
  );
}

export default App;
