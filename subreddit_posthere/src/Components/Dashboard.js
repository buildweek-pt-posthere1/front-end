import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { fetchData } from "../actions/subredditActions";
import { connect } from "react-redux";
import { Body } from "../component_styling/syling";
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
  Container,
  FormLabel,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import SaveIcon from "@material-ui/icons/Save";
import RedditIcon from "@material-ui/icons/Reddit";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import * as yup from "yup";
import axios from "axios";

const Dashboard = (props) => {
  const [state, setState] = useState({
    subPosts: [],
  });
  const [post, setPost] = useState({
    title: "",
    post: "",
  });
  const [savedPost, setSavedPost] = useState ([])

  const [disable, setDisable] = useState(false);

  const formSchema = yup.object().shape({
    title: yup.string().required("Title is a required field."),
    post: yup.string().required("Content is a required field."),
  });

  useEffect(() => {
    formSchema.isValid(post).then((valid) => {
      console.log("valid?", valid);
      setDisable(!valid);
      console.log(disable);
    });
  }, [post]);

  const handleSavedPost = (event) => {
    const newSavedPost = [...savedPost, post ]
    setSavedPost(newSavedPost);
  }

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
    console.log(post);
  };

  const submit = (e) => {
    e.preventDefault();
    addPost(post.title, post.post);
  };

  return (
    <div>
      <Nav />
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <FormControl>
          <FormLabel
            style={{ margin: "10px", textAlign: "center", color: "black" }}>
            Predict where which subreddit your post belongs!
          </FormLabel>
          <FormGroup>
            <TextField
              variant="outlined"
              label="Title"
              name="title"
              id="title"
              value={post.title}
              onChange={handleChange}
              style={{ margin: "10px" }}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              multiline
              rows={10}
              variant="outlined"
              label="Post"
              name="post"
              id="post"
              value={post.post}
              onChange={handleChange}
              style={{ margin: "10px" }}
              size="medium"
            />
          </FormGroup>
          <FormGroup>
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              disabled={disable}
              type="submit"
              onClick={submit}
              style={{ margin: "5px" }}>
              Predict your Subreddit!
            </Button>
            <Button
              variant="contained"
              color="primary"
              endIcon={<SaveIcon />}
              style={{ margin: "5px" }}
              onClick={handleSavedPost}>
              Save Post
            </Button>
          </FormGroup>
        </FormControl>
      </Container>
      <hr style={{ width: "80%", marginTop: "10px" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}>
        <Container>
          <Card>
            <CardHeader avatar={<RedditIcon />} title="Subreddit Prediction:" />
            <CardContent>
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
            </CardContent>
          </Card>
        </Container>
        <Container style={{ borderLeft: "solid black 0.5px" }}>
          <Card>
            <CardHeader avatar={<BookmarkIcon />} title="Saved Posts:" />
            <CardContent>
              {savedPost.length > 0 ? savedPost.map( element => {
                return (
                  <Card style={{margin:'10px'}}>
                  <CardHeader title={element.title} />
                  <CardContent>{element.post}</CardContent>
                </Card>
                )

              }):null}
            </CardContent>
          </Card>
        </Container>
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
