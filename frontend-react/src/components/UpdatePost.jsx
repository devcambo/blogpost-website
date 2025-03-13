import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdatePost = () => {
  const [post, setPost] = useState({
    title: "",
    image: "",
    description: "",
    publishedDate: "",
  });

  const naviate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(post);
  };

  const updatePost = async (post) => {
    try {
      await axios.put(`/api/posts/${id}`, post);
      toast.success("Updated Post Successfully");
      naviate("/posts");
    } catch (error) {
      toast.error("Failed to Add Post");
    }
  };

  useEffect(() => {
    const getPost = async () => {
      const { data } = await axios.get(`/api/posts/${id}`);
      setPost(data);
    };
    getPost();
  }, [id]);

  return (
    <>
      <h3>Add Post</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={post.title}
          onChange={handleChange}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          value={post.image}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={post.description}
          onChange={handleChange}
        />
        <label htmlFor="publishedDate">PublishedDate</label>
        <input
          type="date"
          name="publishedDate"
          id="publishedDate"
          value={post.publishedDate}
          onChange={handleChange}
        />
        <input type="submit" value="Update Post" />
      </form>
    </>
  );
};

export default UpdatePost;
