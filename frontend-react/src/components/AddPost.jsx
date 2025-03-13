import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    image: "",
    description: "",
    publishedDate: "",
  });
  const naviate = useNavigate();
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(post);
  };

  const addPost = async (post) => {
    try {
      await axios.post("/api/posts", post);
      toast.success("Added Post Successfully");
      naviate("/posts");
    } catch (error) {
      toast.error("Failed to Add Post");
    }
  };

  return (
    <>
      <h3>Add Post</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" onChange={handleChange} />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" onChange={handleChange} />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
        />
        <label htmlFor="publishedDate">PublishedDate</label>
        <input
          type="date"
          name="publishedDate"
          id="publishedDate"
          onChange={handleChange}
        />
        <input type="submit" value="Add Post" />
      </form>
    </>
  );
};

export default AddPost;
