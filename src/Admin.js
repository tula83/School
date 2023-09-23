import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import  {data_to_send} from './Apply'

const Admin = () => {
     console.log(data_to_send)
    // data_to_send=data_to_send.replaceAll('\"',"")
     let arr=[]
      arr=data_to_send.split(/[':,']/);
      let to_modified=arr[11]
      to_modified=to_modified+"\""
      for(let i=1;i<arr.length;i+=1)
        arr[i]=arr[i].replaceAll('\"','')
    
return (
    <div class='admin'>
      <p> Data of student  are: </p>
      <PersonIcon  id='person_icon'></PersonIcon>
      <p>Name={arr[1]}</p>
      <p>Father name = {arr[3]}</p>
      <p>Mother name= {arr[5]}</p>
      <p>Class= {arr[7]}</p>
      <p>School= {arr[9]}</p>
      <p> Date of birth= {arr[11]}</p>
    </div>
  )
}

export default Admin;
