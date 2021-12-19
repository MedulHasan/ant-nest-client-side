import React, { useState } from "react";
import {
    TextField,
    Button,
    Typography,
    Box,
    CircularProgress,
} from "@mui/material";

import icon from "../../../image/logo.JPG";
import "./Login.css";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Register from "../Register/Register";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { loginWithEmailAndPassword, loginUsingGoogle, isLoading, error } =
        useAuth();
    const [open, setOpen] = React.useState(false);
    const [loginUser, setLoginUser] = useState({});

    const handleGoogleLogin = () => {
        loginUsingGoogle(location, navigate);
    };

    const handleLoginUser = (e) => {
        const newUser = { ...loginUser };
        newUser[e.target.name] = e.target.value;
        setLoginUser(newUser);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginWithEmailAndPassword(
            loginUser.email,
            loginUser.password,
            location,
            navigate
        );
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div className='login-container'>
            <Box>{/* <img src={banner} alt='' /> */}</Box>
            <Box className='login-form-container'>
                <img width='200px' src={icon} alt='' />
                <Typography sx={{ mb: 3 }} variant='h4'>
                    Login Your account
                </Typography>
                <form onSubmit={handleSubmit} className='login-form'>
                    <TextField
                        label='email@example.com'
                        size='small'
                        name='email'
                        onBlur={handleLoginUser}
                    />
                    <TextField
                        type='password'
                        label='password'
                        size='small'
                        name='password'
                        onBlur={handleLoginUser}
                    />
                    {error && (
                        <p style={{ textAlign: "left", color: "red" }}>
                            {error}
                        </p>
                    )}
                    <Button variant='text' sx={{ mr: "auto" }}>
                        Forget Password?
                    </Button>
                    <Button type='submit' variant='contained'>
                        {isLoading ? (
                            <CircularProgress style={{ color: "#fff" }} />
                        ) : (
                            "Login"
                        )}
                    </Button>
                </form>
                <Button
                    variant='text'
                    sx={{ mr: "auto" }}
                    onClick={handleClickOpen}
                >
                    New User? Registration Here
                </Button>
                <div className='hr-or'>
                    <hr /> <Typography variant='h6'>OR</Typography> <hr />
                </div>
                <Button
                    onClick={handleGoogleLogin}
                    sx={{ mt: 2 }}
                    type='submit'
                    variant='outlined'
                >
                    Google Sign In
                </Button>
            </Box>

            {/* registration */}
            <Register open={open} setOpen={setOpen} />
        </div>
    );
};

export default Login;
