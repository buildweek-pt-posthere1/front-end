import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { fetchData } from "../actions/subredditActions";
import { connect } from "react-redux";
import { Body } from "../component_styling/syling";

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
      <Body>
        <h2>Predict where which subreddit your post belongs!</h2>

        <form>
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
          <button type="submit" onClick={submit}>
            {" "}
            Save Post
          </button>
          <button>Predict your Subreddit</button>
        </form>
      </Body>
      <Body>
        <h2>Prediction: This is where a prediction will display</h2>
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
      </Body>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    postPrediction: state.postPrediction,
  };
};

export default connect(mapStateToProps, { fetchData })(Dashboard);
