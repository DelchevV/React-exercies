import './App.css';
import { useState, useEffect, createContext } from 'react';
import Axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Menu } from './pages/Menu'
import { Error404 } from './pages/Error404'
import { Profile } from './Profile'
import { Navbar } from './Navbar'


export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState('Veselin');

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
