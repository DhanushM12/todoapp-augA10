import React, {useState} from 'react'
import '../App.css'

function App() {
  let timer =new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(timer);
  // const [stateName, setterMethod] = useState(initialValue)
  const updateTime = () => {
    timer =new Date().toLocaleTimeString();
    setCurrentTime(timer)
  }
  setInterval(updateTime, 1000);
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <h3>{currentTime}</h3>
    </div>
  )
}

export default App