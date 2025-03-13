import React, { useEffect, useState } from "react";
import ListPost from "../components/ListPost";
import AboutUs from "../components/AboutUs";
import PopularPost from "../components/PopularPost";
import FollowMe from "../components/FollowMe";
import { toast } from "react-toastify";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  // axios is a promise-based HTTP client for the browser and node.js
  const fetchPostsWithAxios = async () => {
    try {
      const response = await axios.get("/api/posts");
      setPosts(response.data);
    } catch (error) {
      toast.error("Error occurred while fetching posts");
    }
  };

  // fetch is a promise-based API for making HTTP requests
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
    fetchPostsWithAxios();
  }, []);

  return (
    <div className="row">
      <div className="leftcolumn">
        <ListPost posts={posts} />
      </div>
      <div className="rightcolumn">
        <AboutUs />
        <PopularPost />
        <FollowMe />
      </div>
    </div>
  );
};

export default HomePage;
