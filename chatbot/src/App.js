import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react'
import axios from 'axios'
function App() {
    
   const [message,setMessage]=useState([])
    const show=()=>{
      
     axios.post("http://localhost:8000/",{message:r1.current.value}).then(res=>setMessage([...message,r1.current.value,res.data.content]))
    }

  const r1=useRef()

  return (
    <div className='content'>
   
   <h1>welcome to chatGomycode</h1>
   <div>
   {message.map((e,index)=>
   {
    if(index%2==0)
    return <div>me: <h1 className='mine'>{e}</h1> </div>
    else return <div> gpt: <h1 className='gpt'>{e}</h1> </div>
   }
   
   )}
   </div>
   <div>
   <input type="text" ref={r1}></input>
   <button onClick={show}>send message</button></div>
   </div>
  );
}

export default App;
