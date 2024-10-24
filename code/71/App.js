import React from 'react'
import  './App.css'

function Mybutton(){
  return <button type='submit' className='guvi'>GUVI</button>
}


function App() {
  const data={
    name:"GUVI",
    since:2014,
    course:"FUll Stack Developer Bootcamp"
  }

  return (
    <>
    <div className='container'>
    <h1>Welcome to React Module By GUVI in our full stack web developer bootcamp</h1>
     <ul>
       <li>{data.name}</li>
       <li>{data.since}</li>
       <li>{data.course}</li>
     </ul>
     <Mybutton/>
    </div>
     </>
  )
}

export default App