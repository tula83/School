import React, { useState } from 'react'
import { ID,row } from './Portal'

const ForParents = () => {
     const [name,setName]=useState("");
     const [id,setId]=useState("");
     
    
     

  return (
    <div className='for_parents'>
      <h1> Welcome to the parents </h1>
      <h1>Name:{row}</h1>
      <h1>Rollno:{ID}</h1>

   </div>
  )
}

export default ForParents
