import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './sign.css';


const Signup = () => {
  return (
    <div className="signup-container">   
    <div className="signup-form">


    <Typography variant='h4' className='signup-title'>SIGNUP</Typography>
     
    <TextField id="filled-basic" label="Name" variant="standard" fullWidth margin='normal' />
    <TextField id="filled-basic" label="Age" variant="standard" fullWidth margin='normal'/>
    
   
    <TextField id="filled-basic" label="Email" variant="standard" fullWidth margin='normal'/>
    <TextField id="filled-basic" label="Phone no" variant= "standard"fullWidth margin='normal' />
    <TextField id="filled-basic" label="Password" variant="standard" fullWidth margin='normal'/>
    <Button variant="contained" fullWidth margin='normal' className='signup-button'>Create Account</Button>
    </div></div>
  )
}

export default Signup
