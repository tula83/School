import React, { useState } from 'react'
import './Attend.css'
import { alertTitleClasses, TextField } from '@mui/material'
import {Button} from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Student from './Student';


const teacher=['ram','tula','basnet'];
const id_of_teacher=[11,2,112];
var flag=2;

const Attendance = () => {
   const [name,setName]=useState('');
   const [id,setId]=useState('');
   const navigate=useNavigate();
 
   const change_name=(e)=>{
    setName(e.target.value)
   }

   const change_id=(e)=>{
    setId(e.target.value)
  }
   const clear_state =()=>{
       setName('');
       setId("");
   }


   const lo_gin=(e)=>{
         flag=0;
        for(let i=0;i<id_of_teacher.length;++i){
            
          if(id_of_teacher[i]==id && teacher[i]===name){
                console.log(" is found ")
                 navigate("/student")
                 flag=1;
                
                break;
                }
        }
         if(flag==0){
           console.log(id,name)
           console.log("not found")
            alert(" you are not valid user !!!")
        }
     
       clear_state();
   
  }

 
  return (
  <div class='main_attend'>
      <p>enter Your credentials to login </p>      
      <TextField value={name}  id='name' label='enter your name' variant='outlined'
       onChange={change_name} sx={{m:4,height:4}}></TextField>
      <TextField value={id} id='id' label='enter your id' variant='outlined'
         onChange={change_id} sx={{m:4,height:5}}
      ></TextField>

      <Button variant='outlined' id='login' onClick={lo_gin}>Login</Button>

      
  </div>
  )
   }
  
  


export default Attendance;
