import React, { useState } from 'react'
import Calendar from 'react-calendar'

const Schedule = () => {

  const[date, setNewDate] = useState(new Date())

  const handleChange = date =>{
    setNewDate(date);
  }

  return (
    <> 
    <div className='flex flex-col text-white w-[34%] ml-[35rem] '>
    <Calendar onChange={handleChange} value={date} className='flex-col'/>
    
    </div>
    </>


  )
}

export default Schedule