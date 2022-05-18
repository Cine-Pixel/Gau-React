import React from "react";
import { GlobalContext } from "../context/Context";

const PostForm = () => {
  const { post, handlePostChange, addPost } = GlobalContext();

  return (
    <form action="POST">
      <label htmlFor="title">
        <span>Title</span>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handlePostChange}
        />
      </label>
      <label htmlFor="body">
        <span>Body</span>
        <input
          type="text"
          name="body"
          value={post.body}
          onChange={handlePostChange}
        />
      </label>
      <input type="submit" value="Add Post" onClick={addPost} />
    </form>
  );
};

export default PostForm;
