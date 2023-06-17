import { useState } from 'react';
import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';



function App() {
  setInterval(UpdateTime, 1000);
  let now = new Date().toLocaleTimeString('th-TH');
  const [time, setTime] = useState(now);
  const [num, setNum] = useState(0);
 
  const [number, setNumber] = useState('');
  const [isPrime, setIsPrime] = useState(false);

    const checkPrime = () => {
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
        <h2>{num}</h2>
        <button onClick={()=>setNum(num+1)}>เพิ่ม </button>
        <button onClick={()=>setNum(num-1)}>ลด</button>
        <div>
      </div>
    </div>
    <div>
    <input
      type="number"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
    />
    <button onClick={checkPrime}>Check Prime</button>
    {isPrime ? (
      <p>{number} เป็นจำนวนนับเฉพาะ.</p>
    ) : (
      <p>{number} ไม่เป็นจำนวนนับเฉพาะ.</p>
    )}
  </div>
    <MyFooter/> 
    </div>
    
  );
}

export default App;
