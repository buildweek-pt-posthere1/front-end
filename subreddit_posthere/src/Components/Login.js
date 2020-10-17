import React, { useState, useEffect } from "react";
import { FormControl, FormGroup, TextField,Button,Box } from "@material-ui/core";
import * as yup from 'yup';
import { findByLabelText } from "@testing-library/react";
import axios from 'axios';


export default function LogIn() {
    
    // Styling
    const container_style = {
        display:"flex",
        flexDirection:'row',
        height:'100%',
        
    }
    const smallcontainer_style={
        width:'50%',
        height:'100%',
        display:'flex',
        alignItems:'center',
        
        flexDirection:'column',
    }
    const img_style = {
        width: '85%',
        height:'85%',
        
    }
    // Styling ends

    const [login, setLogin] = useState({
    email: "",
    password: ""
    });

    const [disable,setDisable] = useState(true)

    const formSchema = yup.object().shape({
        username: yup.string().required("Username is a required field."), 
        password: yup.string().required("Password is a required field.")
    })

    useEffect(() => {
            formSchema.isValid(login).then(valid => {
            console.log('valid?', valid)
            setDisable(!valid);
        });
    }, [login]);

    const handleChange = (event) => {
    const newValue = { ...login, [event.target.name]: event.target.value };
    setLogin(newValue);
    };

    const onSubmit =(event) => {
        event.preventDefault();
        axios
            .get('')
            .then(response => {
                
            })         
    }

    return (
        <div style={container_style}>
            <div style={smallcontainer_style}>
                <img src='https://smirknewmedia.com/wp-content/uploads/2018/03/snoo.jpg' style={img_style}/>
            </div>
            <div style={smallcontainer_style }> 
            <FormControl style={{paddingTop:'33%'}}>
                <FormGroup style={{ margin: "5px" }}>
                    <TextField
                    id="username"
                    name="username"
                    label="Username"
                    variant="outlined"
                    value={login.username}
                    onChange={handleChange}
                    style={{color:'white'}}
                    />
                </FormGroup>
                <FormGroup style={{ margin: "5px" }}>
                <TextField
                    type="password"
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    value={login.password}
                    onChange={handleChange}
                    style={{color:'white'}}
                />
                </FormGroup>
                <Button disabled={disable} type='submit' variant="contained" color="primary">Let's go!</Button>
            </FormControl>
            <Box style={{margin:'10px'}}>Not a user?</Box>
            <Button variant="contained" color="primary">Signup!</Button>
            </div>
        </div>
    );
}