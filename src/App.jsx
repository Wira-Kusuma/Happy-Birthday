import { useState } from 'react'
import './index.css'
import { useEffect } from 'react';

export default function App() {
  const [birthdayNow, setBirthdayNow] = useState(false);
  useEffect(()=>{
    const now = new Date();
    // today date
    const date = now.getDate();
    const month = now.getMonth() + 1;
    // birthday date
    const Bdate = Number(prompt("what you birthday Date?"));
    const Bmonth = Number(prompt("what you birthday Month?"));
    
      if(date === Bdate && month === Bmonth){
      setBirthdayNow(true);
      document.title="Happy Birthday Wira!";
    }
  },[])
  

  return (
    <main>
      <BirthdayToday birthdayNow={birthdayNow}/>
      <BirthdayLater birthdayNow={birthdayNow}/>
    </main>
  )
}

function BirthdayToday({birthdayNow}) {
  return(
    <div style={birthdayNow == true ? {display:'flex'} : {display:'none'}} className='birthdayToday'>
      <h1>Happy birthday Wira!</h1>
      <p>Wishing you a year filled with joy, laughter, and wonderful moments. May all your dreams come true!</p>
      <img src="img/birthday-cake.gif" alt="birthday cake gif" />
    </div>
  )
}
function BirthdayLater({birthdayNow}) {
  return(
    <div style={birthdayNow == true ? {display: 'none'} : {display: 'flex'}} className='birthdayLater'>
      <h1>Your birthday not now</h1>
    </div>
  )
}