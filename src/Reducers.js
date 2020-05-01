import React, { useReducer, useContext } from "react";
export const GlobalContext = React.createContext();
export const initialState = {
  darkMode: false,
  search: [],
};

export const globalContextReducer = (state, action) => {
  switch (action.type) {
    case "BG_SELECT":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case "SEARCH": {
      return {
        ...state,
        search: action.search,
      };
    }

    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalContextReducer, initialState);
  function handleBackgroundSelect() {
    dispatch({ type: "BG_SELECT" });
  }
  function setSearch(search) {
    dispatch({ type: "SEARCH", search });
  }

  return (
    <GlobalContext.Provider
      value={{ state, handleBackgroundSelect, setSearch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
