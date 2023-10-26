import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Home} from './pages/Home'
import {Contact} from './pages/Contact'
import {Menu} from './pages/Menu'
import {Error404} from './pages/Error404'
import {Navbar} from './Navbar'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/menu'element={<Menu/>}/>
          <Route path='/contact'element={<Contact/>}/>
          <Route path='*' element={<Error404/>}/>


        </Routes>
      </Router>
    </div>
  );
}

export default App;
