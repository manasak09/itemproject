import {useState} from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material';
import pic from './images/safety.png'
import { Avatar, List } from '@mui/material'
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Login(props){
    let naviagte=useNavigate()
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')
      return (<div> 
           {/* <Card sx={{width:275}}>
                  <CardContent> */}
          <Avatar alt="image" src={pic} sx={{position:"relative",
           left:300,top:10,
          width:100,height:100}}/>
           
           <TextField sx={{postion:'realtive',left:250}}
                   helperText="Please enter your name"
                   id="demo-helper-text-misaligned"
                   label="Name"  data-testid="username" 
                       onChange={(e)=>{
                       setUserName(e.target.value)
                 }}/><br/>
               <TextField style={{postion:'relative',top:10,left:250,color:'ButtonText'}}
                   helperText="Please enter Password"
                   id="demo-helper-text-misaligned"
                   label="Password" data-testid="password"
              onChange={(e)=>{
                     setPassword(e.target.value)
              }}
              /><br/>
               <Button variant='contained'          
               style={{postion:'relative',top:15,left:310,width:25,height:20}}
                  data-testid="submitctrl" 
                 onClick={()=>{
     if(username==="admin" && password==="admin123")
     {
         setMessage("valid user")
         naviagte("/home")
     }
     else{
         setMessage("invalid user")
     }
                 }} >Login</Button>
        <br/>
    <label data-testid='msglbl' 
    style={{postion:'relative',top:10,left:250}}>
        {message}
        </label> 
    {/* <Card/></CardContent> */}
      </div>)
}
export default Login;