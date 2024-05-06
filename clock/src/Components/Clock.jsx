import React from 'react'

export default function Clock() {
    const time = new Date();
   
  return (
    <p className='clock'> 
    This current time of Bangladesh: {time.toLocaleTimeString('en-US')} - {time.toLocaleDateString()}
    </p>
  )

}
