import {useState} from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
import Login from "./Login";
import HomePage from "./HomePage/HomePage";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        <Route path='/' element={<ProtectedRoute element={HomePage} loggedIn={loggedIn}/>}/>
        <Route path="/sign-in" element={<Login/>} />
        <Route path="/sign-up" element={<Register/>}/>
      </Routes>
    </>
  )
    ;
}

export default App;
