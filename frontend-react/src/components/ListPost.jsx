import React from "react";
import PostCard from "./PostCard";

const ListPost = ({ posts: posts }) => {
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};

export default ListPost;
