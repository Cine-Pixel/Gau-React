import { createContext, useContext, useEffect, useReducer } from "react";
import reducer, { TYPES } from "../reducers/reducer";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const url = "https://jsonplaceholder.typicode.com";
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    post: {
      id: Math.floor(Math.random() * 1000) + 200,
      title: "",
      body: "",
    },
  });

  const getPosts = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: TYPES.SET_POSTS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts(url + "/posts");
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const GlobalContext = () => {
  return useContext(Context);
};

export default ContextProvider;
