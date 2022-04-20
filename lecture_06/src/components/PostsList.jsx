import React from "react";
import { GlobalContext } from "../context/Context";
import Post from "./Post";

const PostsList = () => {
  const { posts, deletePost, clerPosts } = GlobalContext();

  return (
    <div>
      <button onClick={clerPosts}>Clear</button>
      {posts.map((post, idx) => (
        <Post post={post} deletePost={deletePost} key={idx} />
      ))}
    </div>
  );
};

export default PostsList;
