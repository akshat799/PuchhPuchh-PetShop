import React , { useState } from 'react'
import { Avatar, Button , Paper, Grid , Typography, Container,IconButton, TextField } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import red from '@material-ui/core/colors/red';
import Box from '@material-ui/core/Box';
import "./auth.css";
import { useHistory } from "react-router-dom";
import { useDispatch} from 'react-redux';
import Input from './Input';
import { signup , signin} from '../../actions/auth_action';
export default function Auth() {
    let history = useHistory();
    let dispatch = useDispatch();
    const goBack = () => {
        history.goBack();
    };

    const initialState = {firstName: '', lastName: '' , email: '', password: '', confirmPassword: ''};

    const [isSignup , setIsSignup] = useState(false);

    const [showPassword , setShowPassword] = useState(false);

    const [formData , setFormData] = useState(initialState);

    const handleSubmit = (e) => {

        e.preventDefault();
        
        if(isSignup) {
            dispatch(signup( formData , history ))
        }else{
            dispatch(signin( formData , history ))
        }
    };

    const handleChange = (e) => {

        setFormData ({... formData ,[e.target.name]: e.target.value});

    };

    const handleShowPassword = () => {

        setShowPassword ( (prevShowPassword) => !prevShowPassword)
    };

    const switchMode = () => {

        setIsSignup ((prevIsSignup) => !prevIsSignup)
    }

    return (
        <div>
           <Container component="main" maxWidth="xs">
                <Paper className="paper-auth" elevation={3}>
                    <IconButton aria-label="delete" className="close-auth" onClick={goBack}>
                        <CloseOutlinedIcon />
                    </IconButton>
                    <Avatar style={{backgroundColor: "red"}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
                    <form className="form-auth" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {
                                isSignup && (
                                 <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange}  half />
                                 </>   
                                )
                            }
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? "text" : "password"}  />
                            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                        </Grid>
                        <Box mt={2}>
                            <Button type="submit" variant="contained" fullWidth color="primary" className="button-auth" size="large">
                                {isSignup ? "Sign Up" : "Sign In"}
                            </Button>
                        </Box>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
           </Container>
        </div>
    )
}
