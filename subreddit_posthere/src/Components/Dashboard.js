import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import { fetchData } from "../actions/subredditActions";
import { connect } from "react-redux";

const Body = styled.div`
  margin-top: 5%;
  margin-left: 30%;
`;

const Dashboard = (props) => {
  const [state, setState] = useState({
    subPosts: [],
  });
  const [post, setPost] = useState({
    title: "",
    post: "",
  });

  console.log(state);

  const addPost = (title, post) => {
    const newPost = { title: state.subPosts.title, post: state.subPosts.post };
    setState({
      subPosts: [...state.subPosts, { title: title, post: post }],
    });
  };

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    addPost(post.title, post.post);
  };

  return (
    <div>
      <Nav />
      <Body>
        <h2>Predict where your post will go!!</h2>

        <form onSubmit={submit}>
          <input
            type="text"
            name="title"
            placholder="title"
            value={post.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="post"
            placeholder="Your post goes here"
            value={post.post}
            onChange={handleChange}
          />
          <button type="submit">Click Here to Predict</button>
        </form>
      </Body>
      <div>
        {state.subPosts.map((post) => {
          return (
            <>
              <p>Title: {post.title}</p>
              <p>Post: {post.post}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    postPrediction: state.postPrediction,
  };
};

export default connect(mapStateToProps, { fetchData })(Dashboard);
