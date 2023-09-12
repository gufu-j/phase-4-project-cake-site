import './App.css';
import React, { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";

// Step One : Involves SignIn SetUp
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';



function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r)=> {
      if(r.ok){
        r.json().then((user) => setUser(user));
      }
    });
  }, [])

  return (
    <div>
      <NavBar/>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login setUser={setUser}/> } />
        <Route path="/singup" element={ <SignUp/> }/>
      </Routes>
    </div>
  );
}

export default App;
