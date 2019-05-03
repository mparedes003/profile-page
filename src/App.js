import React from "react";
import profile_pic from "./profile_pic.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="sidebar">
          <img
            src={profile_pic}
            className="photo"
            alt="Michelle Paredes Photo"
          />
          <h3>Michelle Paredes</h3>
        </div>
        <div className="profile-body">
          <h3>About</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
