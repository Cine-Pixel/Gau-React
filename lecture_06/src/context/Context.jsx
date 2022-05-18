import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const url = "https://jsonplaceholder.typicode.com";
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    id: Math.floor(Math.random() * 1000) + 200,
    title: "",
    body: "",
  });

  const getPosts = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePostChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const addPost = (e) => {
    e.preventDefault();
    setPosts([post, ...posts]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const clerPosts = () => {
    setPosts([]);
  };

  useEffect(() => {
    getPosts(url + "/posts");
  }, []);

  return (
    <Context.Provider
      value={{
        posts,
        post,
        handlePostChange,
        addPost,
        deletePost,
        clerPosts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const GlobalContext = () => {
  return useContext(Context);
};

export default ContextProvider;
