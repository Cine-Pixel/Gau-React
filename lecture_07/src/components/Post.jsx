import React from "react";
import { GlobalContext } from "../context/Context";
import { TYPES } from "../reducers/reducer";

const Post = ({ post }) => {
  const { dispatch } = GlobalContext();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button
        value={post.id}
        onClick={(e) =>
          dispatch({
            type: TYPES.DELETE_POST,
            payload: parseInt(e.target.value),
          })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Post;
