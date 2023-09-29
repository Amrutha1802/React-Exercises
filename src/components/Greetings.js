import '../App.css';
import React from 'react';
import { useParams } from 'react-router-dom'
function Greetings(){
  const params=useParams();
  const username =params.username ===':username'?'User':params.username;
  function getTime()
  {
    const now = new Date();
    const currentHour = now.getHours();
    if(currentHour<12)
    {
      return "Morning";
    }
    if(currentHour<17)
    {
      return "Afternoon";
    }
    else{
      return "Evening"
    }
  }
  const time=getTime();
  return <h1>Hello {username} , Good {time}</h1>;
}
export default Greetings;