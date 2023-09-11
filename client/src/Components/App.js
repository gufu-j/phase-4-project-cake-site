import './App.css';
import CakeHeader from './CakeHeader';
import Login from './Login';

import React from 'react';
import {Route, Routes} from "react-router-dom";

function App() {


  return (
    <div>
      <CakeHeader/>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
