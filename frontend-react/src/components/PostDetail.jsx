import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        toast.error("Error occurred while fetching post");
      }
    };
    fetchPost();
  }, [id]);

  // handle delete post
  const handleDelete = async () => {
    try {
      const confirm = window.confirm("Are you sure you want to delete this post?");
      if (!confirm) return;
      await axios.delete(`/api/posts/${id}`);
      navigate("/posts");
      toast.success("Post deleted successfully");
    } catch (error) {
      toast.error("Error occurred while deleting post");
    }
  };

  return (
    <div className="card">
      <h2>{post.title}</h2>
      <h5>Title description, {post.publishedDate}</h5>
      <div className="fakeimg" style={{ height: "200px" }}>
        Image
      </div>
      <p>Some text..</p>
      <p>{post.description}</p>
      <Link to={`/update/${post.id}`}>Update</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PostDetail;
