import { createContext, useReducer } from "react";
import reducer from "../reducers/reducer";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    questions: [],
    questionNumber: 0,
    category: "",
    score: 0,
  });

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { ContextProvider, Context };
