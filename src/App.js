import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios'



function App() {
  const [excuse, setExcuse]=useState('')
  

  const fetchFamilyExcuse= ()=>{
    Axios.get('https://excuser-three.vercel.app/v1/excuse/family/').then((response)=>{
      setExcuse(response.data[0].excuse)
    })
  }

  const fetchPartyExcuse= ()=>{
    Axios.get('https://excuser-three.vercel.app/v1/excuse/party/').then((response)=>{
      setExcuse(response.data[0].excuse)
    })
  }

  const fetchOfficeExcuse= ()=>{
    Axios.get('https://excuser-three.vercel.app/v1/excuse/office/').then((response)=>{
      setExcuse(response.data[0].excuse)
    })
  }

  const fetchGamingExcuse= ()=>{
    Axios.get('https://excuser-three.vercel.app/v1/excuse/gaming/').then((response)=>{
      setExcuse(response.data[0].excuse)
    })
  }
 

  return (
    <div className="App">
      <h1>Excuses Generator</h1>
      <button onClick={fetchFamilyExcuse}>Family</button>
      <button onClick={fetchPartyExcuse}>Party</button>
      <button onClick={fetchOfficeExcuse}>Office</button>
      <button onClick={fetchGamingExcuse}>Gaming</button>

      <h1>{excuse}</h1>
    </div>
  );
}

export default App;
