
import './App.css';
import { useState } from 'react';

import { Player } from './User'

function App() {
  const [showText, setShowText] = useState(true);

  const hideOrShow = (e) => {
    setShowText(showText ? false : true)
  };
  return (

    <div className="App">
      <button onClick={hideOrShow}>Show/Hide</button>
      {showText === true && <h1>Hello there!</h1>}
    </div>

  );
}

export default App;
