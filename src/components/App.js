import {useState} from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
import Login from "./Login";
import HomePage from "./HomePage/HomePage";
import Register from "./Register";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to='/' replace/> : <Navigate to='/sign-in' replace/>}/>
        <Route path="/sign-in" element={<Login/>}/>
        <Route path="/sign-up" element={<Register/>}/>
      </Routes>

      {loggedIn && <HomePage/>}
    </>
  )
    ;
}

export default App;
