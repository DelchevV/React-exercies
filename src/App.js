import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios'



function App() {
  const [fact, setFact] = useState('')

  const serveFact = ()=>{
    Axios.get('https://catfact.ninja/fact').then((res)=>{
      setFact(res.data.fact)
    })
  }

  useEffect(()=>{
    serveFact();
  },[])

  return (
    <div className="App">
      <button onClick={serveFact}>Generate Cat Fact</button>
      <p>{fact}</p>
    </div>
  );
}

export default App;
