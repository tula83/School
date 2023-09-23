import React from 'react'
import Race from './Short-Races.json'
import {DataGrid} from '@mui/x-data-grid';
import './CSS/App.css'

const Race_data = () => {

    const [user,setUser]=('');

    const cols= [
        {field:"POS",headerName:"POS",width:200},
        {field:"BIB",headerName:"BIB",width:250, },
        {field:"ATHLETE",headerName:"ATHLETE",width:250},
        {field:"COUNTRY",headerName:"COUNTRY",width:180},
        {field:"RxnTime",headerName:"RxnTime",width:200},
        {field:"Race",headerName:"Race",width:200},
        {field:"Round",headerName:"Round",width:200},
        {field:"Gender",headerName:"Gender",width:250},
        {field:"Year",headerName:"Year",width:250},
    ];

    const rowData=Race?.map(user=>{

        return {
         POS:user?.POS,
         BIB:user?.BIB,
         ATHLETE:user?.ATHLETE,
         COUNTRY:user?.COUNTRY,
         RxnTime:user?.RxnTime,
         Race:user?.Race,
         Round:user?.Round,
         Gender:user?.Gender,
         Year:user?.Year,
        }
    });

  return (
     <div id='main'>
        <p id='content'>
         
         
        The 60 metres at the Summer Olympics was contested at the multi-sport event in 1900 and 1904. Part of the Olympic athletics programme, it is the shortest sprinting event to have featured at the Olympics. The shortest sprinting event on the current programme is the 100 metres. Only men competed in the two years that the event was held.
        The United States dominated the event in its short history, winning five of the six medals given out. None of the medallists were specialists in the event and all of them won Olympic medals in different events in their careers. Alvin Kraenzlein's 1900 victory formed part of a haul of four gold medals at that Olympics, as he also won two 
        hurdling titles and the long jump.Archie Hahn became the only man to have won three sprint titles in one Olympics in 1904, taking the short sprint titles from 60 metres up to 200 metres.
        The fastest hand-timed performance for this event at the Olympics was seven seconds. This was twice achieved by Kraenzlein in 1900, was matched by fellow Americans Clyde Blair and Bill Hogenson in the 1904 first round, and equalled for a final time by Hahn in the 1904 final.
        At the 1904 Summer Olympics a 60-yard dash handicap race was held and an American, C. Hastedt, was the winner. This contest is no longer considered part of the official Olympic canon of events.
        After the event's removal from the Olympic programme, the 60 metres never featured at any other major outdoor international championship and it is now a common event in indoor track and field comp
        
        </p>
      <div id='entry'> <h1>  Here are Data   </h1>
      
      </div>

      <div id='data_grid' style={{width: '100%'}}>
      
    <DataGrid rows={rowData}columns={cols} 
    sx={{
      boxShadow: 2,
      border: 2,
      borderColor: 'blue',
      '& .MuiDataGrid-cell:hover': {
        color: 'white',
      },
      '& .MuiDataGrid-cell':{
        color:'blue',
      },
      '& .bib':{
        backgroundColor: '#ff943975',
        color: '#1a3e72',
      },
      
      '& .pos':{
        backgroundColor: 'grey',
        color: 'blue',
      },
       
  '& .ath':{
    backgroundColor:'rgb(237,184,121)',
    color:'#1c100b'
  },
    
   '& .coun':{
     backgroundColor:'#6f25be',
     color:'#Be2525',
   }
  
    }}
    
      pageSize={10}
      disableSelectionOnClick
      disableMultipleSelection={true} 
      checkboxSelection 
      getCellClassName={(params) => {
        if (params.field === 'POS') 
          return 'pos'
        else if (params.field==='BIB')
        return  'bib';
        else if(params.field==='ATHLETE')
          return 'ath'
        else if(params.field==='COUNTRY')
         return 'coun'
        
      }}

      getRowId={(row) => row.ATHLETE}autoHeight />
      </div>



</div>
  
  )
}

export default Race_data;
