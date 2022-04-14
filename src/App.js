import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Board from "./components/Board/Board";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Board />
    </div>
  );
};

export default App;
