import Songs from './components/Songs';       
import React from "react";  
import './App.css'  
import { useEffect,useState } from 'react';  

function App() {       
  const [songs, setSongs] =useState([])  
  useEffect(() =>  {    
  console.log('T')
    fetch("http://localhost:4000/Songs")  
    .then((r)=> r.json())  
    .then(data =>  setSongs(data))
  },[])      
  console.log('v',songs)     

  return( 
    <div className="App">   
    <Songs  songs={songs}/>     
    </div>

  )
}  
export default App;  