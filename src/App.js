import { useState } from 'react';
import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';



function App() {
  setInterval(UpdateTime, 1000);
  let now = new Date().toLocaleTimeString('th-TH');
  const [time, setTime] = useState(now);
  const [number, setNumber] = useState(0);
  const [isPrime, setIsPrime] = useState(false);

  const setPrime = () => {
    const num = parseInt(number);

    if (isNaN(num) || num <= 1) {
      setIsPrime(false);
      return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        setIsPrime(false);
        return;
      }
    }

    setIsPrime(true);
  };
  
  function UpdateTime(){
    let newTime = new Date().toLocaleTimeString('th-TH');
    setTime(newTime);

  }
  

  return (
    <div>
    <MyHeader />
      <div className='My-content'>
        <div>ขณะนี้เวลา</div>
        <div>{time}</div>
        <h2>{number}</h2>
        <button onClick={()=>setNumber(number+1)}>เพิ่ม</button>
        <button onClick={()=>setNumber(number-1)}>ลด</button>
        <button onClick={setPrime}>ตรวจสอบ</button>
        
            {isPrime ? (
              <p>{number} เป็นจำนวนเฉพาะ</p>
            ) : (
              <p>{number} ไม่เป็นจำนวนเฉพาะ</p>
                 )}
        <div>
    </div>
      </div>
    <MyFooter/> 
    </div>
    
  );
}

export default App;
