import React from "react";
import { GlobalContext } from "../context/Context";
import { TYPES } from "../reducers/reducer";
import Post from "./Post";

const PostsList = () => {
  const { state, dispatch } = GlobalContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: TYPES.CLEAR_POSTS })}>
        Clear
      </button>
      {state.posts.map((post, idx) => (
        <Post post={post} key={idx} />
      ))}
    </div>
  );
};

export default PostsList;
