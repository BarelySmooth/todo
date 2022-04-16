import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Board from "./components/Board/Board";
import PageNotice from "./components/PageNotice/PageNotice";
import { AppContextProvider } from "./contexts/appContext";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <PageNotice />

      <div className="App">
        <AppContextProvider>
          <Sidebar />
          <Board />
        </AppContextProvider>
      </div>
    </React.Fragment>
  );
};

export default App;
