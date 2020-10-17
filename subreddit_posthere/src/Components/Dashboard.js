import React,{useState, useEffect} from 'react';
import { FormControl, FormGroup, TextField,Button,Container, FormLabel } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import * as yup from 'yup';
import { findByLabelText } from "@testing-library/react";
import axios from 'axios';

const Dashboard = () => {
    const [post, setPost] = useState({
        title:'',
        content:''
    })
    const [disable, setDisable] = useState(true)
    const formSchema = yup.object().shape({
        title: yup.string().required("Title is a required field."), 
        content: yup.string().required("Content is a required field.")
    })
    const handleChange = (event) => {
        const newValue = { ...post, [event.target.name]: event.target.value };
        setPost(newValue); 
    }


    useEffect(() => {
            formSchema.isValid(post).then(valid => {
            console.log('valid?', valid)
            setDisable(!valid);
        });
    }, [post]);

    return (
        <div>
            <Container style={{display:'flex',justifyContent:'center'}}>
                
                <FormControl >
                    <FormLabel style={{margin:'10px', textAlign:'center', color:'black'}} >New Post</FormLabel>
                    <FormGroup>
                        <TextField variant='outlined' label='Title' name='title' id='title' value={post.title} onChange={handleChange} style={{margin:'10px'}}/>
                    </FormGroup>
                    <FormGroup>
                        <TextField multiline variant='outlined' label='Content' name='content' id='content' value={post.content} onChange={handleChange} style={{margin:'10px'}}/>
                    </FormGroup>
                    <FormGroup >
                        <Button
                            variant="contained"
                            color="primary"
                            endIcon={<SendIcon/>}
                            disabled={disable}
                            
                        >
                        Send
                        </Button>
                    </FormGroup>
                </FormControl>
            </Container>
            <hr style={{width:'80%', marginTop:'10px'}} />
        </div>
    );
}

export default Dashboard;
