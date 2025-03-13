import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post: post }) => {
  return (
    <div className="card">
      <h2>{post.title}</h2>
      <h5>Title description, {post.publishedDate}</h5>
      <div className="fakeimg" style={{ height: "200px" }}>
        Image
      </div>
      <p>Some text..</p>
      <p>{post.description}</p>
      <Link to={`/posts/${post.id}`}>Read More</Link>
    </div>
  );
};

export default PostCard;
