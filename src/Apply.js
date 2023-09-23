import React from 'react'
import Popup from 'reactjs-popup'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import './CSS/App.css'
import { json } from 'react-router-dom';



var data_to_send=0;

const Apply = () => {
   
    const [name,setName]=useState('');
    const [father,setFather]=useState('');
    const [mother,setMother]=useState('');
    const [date,setDate]=useState(dayjs|null);
    const [class1,setClass1]=useState('');
    const [school,setSchool]=useState('');
    
    const change_name=(e)=>{
        setName(e.target.value)
    }

    const change_father=(e)=>{
        setFather(e.target.value)
    }

    const change_mother=(e)=>{
         setMother(e.target.value);
    }
   
    const change_class=(e)=>{
        setClass1(e.target.value);
   }
   const change_school=(e)=>{
         setSchool(e.target.value);
    }
    

    const handleSubmit=(e)=>{
         const data={name,father,mother,class1,school,date}
          data_to_send=JSON.stringify(data)
          console.log(typeof(data_to_send))
          clear_state()

    }

 const clear_state=()=>{

          setName("");
          setFather("");
          setMother("");
          setClass1("");
          setSchool("");
          setDate("")


    }
    
  return (
    <div class='main_of_apply'>
        
    <div class='main_of_apply'> 
       <TextField id='name_of_apply' variant='outlined'label='Enter your name' value={name}
        sx={{m:1,height:5}} onChange={change_name}>
       </TextField>

       <TextField id='father' variant='outlined' 
       label='Father name' value={father} sx={{m:1,height:5}} onChange={change_father}>
       </TextField>

       <TextField id='mother' variant='outlined' label='Enter your mother name'
        value={mother}
        sx={{m:1,height:5}} onChange={change_mother}></TextField>

       <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <DatePicker
          views={['year','month','day']}
          label="enter your date of birth"
          value={date}
          onChange={(newValue) => {
          setDate(newValue);
          }}
          renderInput={(params) => <TextField id='mother'  variant='outlined'
          sx={{m:1,height:5}} value={date}  {...params} helperText={null} />}
        />
        </LocalizationProvider>
       
        <TextField id='class'  variant='outlined' 
       label='Enter your class' value={class1}
       sx={{m:1,height:5}} onChange={change_class}></TextField>

       <TextField id='school' 
       variant='outlined' value={school} label='Enter your previous school' sx={{m:1,height:5}}
       onChange={change_school}></TextField>
    
    </div>
    
       <div class='main_of_apply'>  
         <Button variant='outlined' onClick={handleSubmit}  id='submit' >Submit</Button>
         <Button variant='outlined' onClick={clear_state} id='cancel'>Cancel</Button>
       </div>
       
      

    </div>
  )
}

export default Apply;
export  {data_to_send};