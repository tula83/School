import './CSS/App.css';
import { useState,setState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




function App() {

      const [name,setName]=useState('');
      const [roll,setRoll]=useState('');
      const [age,setAge]=useState('');
      const [email,setEmail]=useState('');


      const change_name= (event) => {
        setName(event.target.value);
      };
      const change_roll=(event)=>{
        setRoll(event.target.value);
      }

      const change_age=(event)=>{
        setAge(event.target.value);
      }
      const change_email=(event)=>{
        setEmail(event.target.value);
      }

  const value_handle=(e)=>{
         e.preventDefault();
         const val={
           name,
           roll,
           age,
           email,
         };
      
         const dataToSend = JSON.stringify(val);

          localStorage.setItem("data",dataToSend);
         
          console.log(localStorage.getItem('data'));

          //clear_data();
         
          console.log(localStorage.getItem('data'));




  };
   
const clear_data=()=>{

   setName('');
   setAge('');
   setRoll('');
   setEmail('');

}


return (


    <div className="App">
           
       <h1>enter details</h1>

       <TextField
        hiddenLabel
        id="name"
        placeholder="enter name "
        defaultValue=""
        variant="outlined"
        onChange={change_name}
      />
         <br/>
        <br />
          
      <TextField
        hiddenLabel
        id="roll"
        placeholder="enter roll number "
        defaultValue=""
        variant="outlined"
        onChange={change_roll}
      />
        <br />
        <br />
      <TextField
        hiddenLabel
        id="age"
        placeholder=" age "
        defaultValue=""
        variant="outlined"
        onChange={change_age}
      />
        <br />
        <br />
      <TextField
        hiddenLabel
        id="email"
        placeholder="email"
        defaultValue=""
        variant="outlined"
        onChange={change_email}
      
      />
      <br />
      <br />
       <div id='footer'>
       <Button type='submit' variant="contained" id="submit" onClick={value_handle}> Submit</Button>
       <Button  type='submit' variant="contained" id="cancel" onClick={clear_data}>Cancel</Button>

       </div>

    </div>
  );



}

export default App;
