import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { fetchPost, fetchData, submitPost, handle_change_subRedditPost, clear_form, deletePost } from "../actions/subredditActions";
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
import { useHistory } from "react-router";

const Dashboard = (props) => {
  const [disable, setDisable] = useState(false);
  const {push} = useHistory()

  const formSchema = yup.object().shape({
    title: yup.string().required("Title is a required field."),
    text: yup.string().required("Content is a required field."),
  });

  useEffect(() => {
    formSchema.isValid(props.subRedPosts).then((valid) => {
      setDisable(!valid);
    });
  }, [props.subRedPosts]);


  useEffect(() => {
    props.fetchPost(props.prevPosts)
  },[])

console.log("where info is stored", props.prevPosts)

  return (
    <div>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <FormControl>
          <FormLabel
            style={{ margin: "10px", textAlign: "center", color: "black" }}>
            We'll predict which subreddit your post belongs!
          </FormLabel>
          <FormGroup>
            <TextField
              variant="outlined"
              label="Title"
              name="title"
              id="title"
              value={props.subRedPosts.title}
              onChange={props.handle_change_subRedditPost}
              style={{ margin: "10px" }}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              multiline
              rows={10}
              variant="outlined"
              label="Post"
              name="text"
              name="text"
              id="text"
              value={props.subRedPosts.text}
              onChange={props.handle_change_subRedditPost}
              style={{ margin: "10px" }}
              size="medium"
            />
          </FormGroup>
          <FormGroup>
            <Button
            onClick={async e => {
              e.preventDefault();
              await props.fetchData(props.subRedPosts)
            }}
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              disabled={disable}

              style={{ margin: "5px" }}>
              Predict your Subreddit!
            </Button>
            <Button
              variant="contained"
              color="primary"
              endIcon={<SaveIcon />}
              style={{ margin: "5px" }}
              Save Post
              type="submit"
              disabled={disable}
              onClick={async e => {
                e.preventDefault();
                await props.submitPost(props.subRedPosts)
                await props.fetchPost(props.subRedPosts)

              }}>
                Save Your post
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
              <>
              {props.postPrediction.map(prediction => {
                return (
                  <>
                  <p>1. r/{prediction.pred_1}</p>
                  <p>2. r/{prediction.pred_2}</p>
                  <p>3. r/{prediction.pred_3}</p>
                  <p>4. r/{prediction.pred_4}</p>
                  <p>5. r/{prediction.pred_5}</p>
                  </>
                )
              }

              )}
              </>
            </CardContent>
          </Card>
        </Container>
        
        <Container style={{ borderLeft: "solid black 0.5px" }}>
          <Card>
            <CardHeader avatar={<BookmarkIcon />} title="Saved Posts:" />
            <CardContent>
            {props.prevPosts.map(res => {
          return (
            res.map(res => {
              return ( <>
                <Card style={{margin:'10px'}}>
                <CardHeader title={res.title} />
                <CardContent>{res.text}</CardContent>
               <button onClick={e => {
                 e.preventDefault()
                 props.deletePost(res.id)
               }}
               >x</button>
              </Card>
              </>) 
            })
)})}
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
    subRedPosts: state.subRedPosts,
    prevPosts: state.prevPosts,
  };
};

export default connect(mapStateToProps, { fetchPost, fetchData, submitPost, handle_change_subRedditPost, clear_form, deletePost })(Dashboard);
