import React from "react";
import { GlobalContext } from "../context/Context";
import { TYPES } from "../reducers/reducer";

const PostForm = () => {
  const { state, dispatch } = GlobalContext();

  const handlePostChange = (e) => {
    dispatch({
      type: TYPES.HANDLE_POST,
      payload: { ...state.post, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: TYPES.ADD_POST });
  };

  return (
    <form action="POST">
      <label htmlFor="title">
        <span>Title</span>
        <input
          type="text"
          name="title"
          value={state.post.title}
          onChange={handlePostChange}
        />
      </label>
      <label htmlFor="body">
        <span>Body</span>
        <input
          type="text"
          name="body"
          value={state.post.body}
          onChange={handlePostChange}
        />
      </label>
      <input type="submit" value="Add Post" onClick={handleSubmit} />
    </form>
  );
};

export default PostForm;
