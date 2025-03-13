import React, { useEffect, useState } from "react";
import ListPost from "../components/ListPost";

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  const fetchPostWithFetch = async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      toast.error("Error occurred while fetching posts");
    }
  };

  useEffect(() => {
    fetchPostWithFetch();
  }, []);

  return (
    <div className="row">
      <div className="leftcolumn">
        <ListPost posts={posts} />
      </div>
    </div>
  );
};

export default PostPage;
