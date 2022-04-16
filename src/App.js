import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Board from "./components/Board/Board";
import { AppContextProvider } from "./contexts/appContext";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <Sidebar />
        <Board />
      </AppContextProvider>
    </div>
  );
};

export default App;
