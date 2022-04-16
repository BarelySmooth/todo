import React, { useState, createContext } from "react";

export const AppContext = createContext([
  {
    test: "default value",
  },
  () => {},
]);

export const AppContextProvider = (props) => {
  const [appState, setAppState] = useState({
    test: "test",
    currentSelectedAppCategory: "main",
    currentSelectedList: {
      parentList: "built_in",
      childList: "today",
    },
  });

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {props.children}
    </AppContext.Provider>
  );
};
