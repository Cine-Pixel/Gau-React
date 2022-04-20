import React from "react";

const Post = ({ post, deletePost }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button value={post.id} onClick={(e) => deletePost(e.target.value)}>
        Delete
      </button>
    </div>
  );
};

export default Post;
