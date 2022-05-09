import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Board from "./components/Board/Board";
import PageNotice from "./components/PageNotice/PageNotice";
import { AppContextProvider } from "./contexts/appContext";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("init")) {
    // TODO: get this from sample-data.json instead
    const JSONtoSet = {
      "parent-list-219429881290912048": {
        name: "General",
        "open?": true,
        position: 1,
        sub_lists: [
          {
            id: "list-3958083409809423890",
            name: "List 1",
            position: 1,
            todos: [
              {
                id: "todo-3958083409809423890-1",
                name: "Todo 1",
                completed: false,
                position: 1,
                "AND MORE....": "....",
              },
              {
                id: "todo-3958083409809423890-2",
                name: "Todo 2",
                completed: false,
                position: 2,
              },
              {
                id: "todo-3958083409809423890-3",
                name: "Todo 3",
                completed: false,
                position: 3,
              },
            ],
          },
          {
            id: "list-7678083409806839090",
            name: "List 2",
            position: 2,
            todos: [
              {
                id: "todo-7678083409806839090-1",
                name: "Todo 1",
                completed: false,
                position: 1,
                "AND MORE....": "....",
              },
              {
                id: "todo-7678083409806839090-2",
                name: "Todo 2",
                completed: false,
                position: 2,
              },
              {
                id: "todo-7678083409806839090-3",
                name: "Todo 3",
                completed: false,
                position: 3,
              },
            ],
          },
        ],
      },

      "parent-list-87888888888": {
        name: "Programming",
        "open?": true,
        position: 1,
        sub_lists: [
          {
            id: "list-3958083409809423890",
            name: "List 1",
            position: 1,
            todos: [
              {
                id: "todo-3958083409809423890-1",
                name: "Todo 1",
                completed: false,
                position: 1,
                "AND MORE....": "....",
              },
              {
                id: "todo-3958083409809423890-2",
                name: "Todo 2",
                completed: false,
                position: 2,
              },
              {
                id: "todo-3958083409809423890-3",
                name: "Todo 3",
                completed: false,
                position: 3,
              },
            ],
          },
          {
            id: "list-7678083409806839090",
            name: "List 2",
            position: 2,
            todos: [
              {
                id: "todo-7678083409806839090-1",
                name: "Todo 1",
                completed: false,
                position: 1,
                "AND MORE....": "....",
              },
              {
                id: "todo-7678083409806839090-2",
                name: "Todo 2",
                completed: false,
                position: 2,
              },
              {
                id: "todo-7678083409806839090-3",
                name: "Todo 3",
                completed: false,
                position: 3,
              },
            ],
          },
        ],
      },
    };

    localStorage.setItem("todo_data", JSON.stringify(JSONtoSet));
  }

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
