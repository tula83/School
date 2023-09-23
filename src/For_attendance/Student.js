import React, { useEffect } from 'react'
import {DataGrid} from '@mui/x-data-grid';
import './Attend.css'
import { useState,setState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


var selected_data;
var arr=[];
var  rowData=[{Name:"tula ram basnet",Rollno:996}
,{Name:"purna basnet",Rollno:90},
{Name:"gang ram basnet",Rollno:906},
{Name:"menaka basnet",Rollno:968},
{Name:"Prabhas kc",Rollno:908},


];
const Student = () => {

     
    
    const navigate=useNavigate();
    const cols= [
       
        {field:"Name",headerName:"Name of Student",width:250, editable:true},
        {field:"Rollno",headerName:"roll",width:250,editable:true},
        
        
    ];
    
    
   const handle_selection=(e)=>{
        if(e==null)
         return
        else{
           
            selected_data=e;
            console.log(selected_data)
       
        }
   }

   const handle_save=()=>{
         alert('saved successfully');
          navigate('-2')
   }


    return (
    
      
         <div id='student_data'>
               <DataGrid rows={rowData}columns={cols}
                 autoHeight
                 getRowId={(row)=>row.Rollno}
                 checkboxSelection
                 sx={{m:4,
                    '& .MuiDataGrid-cell': {
                        color: 'white',
                      } ,
                      '& .MuiDataGrid-row:hover':{
                        backgroundColor: '#686de0',
                      } ,
                      '& .MuiDataGrid-columnHeaders': {
                        fontSize:'1.5rem'
                      } ,

                     
                }}
                onSelectionModelChange={(ids) => {
                  for( let i=0;i<ids.length;++i)
                  {
                      let obj=rowData.filter((item)=>
                        item.Rollno===ids[i]
                      );
                      arr.push(obj);
                      
                  }
                 
                }}
               
                  
               ></DataGrid>
            <div className='footer_for_attend'> 
            <Button variant='contained'  id='save' onClick={handle_save}>Save</Button>
            </div>
         </div>
       

  )
}

export default Student;
export {arr};
export {rowData};