import React from 'react'
import useHome from './usehome';

function Home() {
  const {
    data: {
      nama,
      stack
    },
    method: {
      activity
    } 
  } = useHome();
  
  return (
    <div>
      <h1>Nama: {nama}</h1>
      <h1>stack: {stack}</h1>
      <h1>Activity: {activity()}</h1>
    </div>
  )
}

export default Home;