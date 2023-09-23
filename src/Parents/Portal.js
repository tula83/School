import React, { useState } from 'react'
import { TextField } from '@mui/material'
import {Button} from '@mui/material';
import parent_img from './Parents_image.png'
import './Portal.css';
import { rowData,arr } from '../For_attendance/Student'

import { useNavigate } from "react-router-dom";


var parent_name=['bir','bahadur','gharti_magar','ram bahadur kc','dipendra shahi'];
var parent_id=[996,90,906,968,908];
var ID=Number;
var row;

const Portal = () => {

    const navigate=useNavigate();

    const [name,setName]=useState('');
    const [id,setId]=useState('');

    const change_name=(e)=>{
        setName(e.target.value)
       }
    
       const change_id=(e)=>{
        setId(e.target.value)
       
      }
      
      const handlelogin=()=>{
             let flag=0;
              console.log(arr.length);
             for(let i=0;i<parent_id.length;++i){
                
                console.log(parent_id[i],parent_name[i]);

                 if(parent_id[i]==id && parent_name[i]===name){
                     console.log("found");
                       row=rowData[i].Name;
                       ID=id;
                      navigate("parents_portal")
                     flag=1;
                     break;
                 }
              }

             if(flag==0){
                 console.log(" not found ");
             }

             clear_state();
      }

      const clear_state =()=>{
           setName('');
           setId("");
       }

  return (

    <div className='portal'>
           <img src={parent_img} id='parent_img' alt="not loaded"/>
           <TextField variant='outlined'  label='enter your name' value={name}
            onChange={change_name} required sx={{m:2}}
           ></TextField>
           <TextField variant='outlined'  label='enter your id' value={id}
            onChange={change_id}required sx={{m:2}}
           ></TextField>
           <Button variant='contained' id='login_for_portal'
            onClick={handlelogin}
           >Login</Button>
    </div>
  )
}

export default Portal;
export {ID,row};
