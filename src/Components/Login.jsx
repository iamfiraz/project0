import React from 'react'
import './login.css';
import { Button, TextField } from '@mui/material';

const Login = () => {
  return (
    <div className='login-container'>
    <center><h1>LOGIN</h1></center>
    <TextField label="Username" variant="standard" fullWidth margin='normal' className="login-input"/><br/>
    <TextField  label="Password" variant="standard" fullWidth margin='normal' className="login-input" /><br/>
    <Button variant="contained"className="login button" fullWidth style={{marginTop:'20px'}}>LOGIN</Button></div>
  )
}

export default Login
