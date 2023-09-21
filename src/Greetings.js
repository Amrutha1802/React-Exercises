import './App.css';
import React from 'react';
function Greetings({name}){
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
  return <h1>Hello {name} , Good {time}</h1>;
}
export default Greetings;