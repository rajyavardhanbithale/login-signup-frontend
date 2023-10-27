import Login from "./components/Login"
import './App.css'
import Signup from "./components/Signup"
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <>
      {/* <Login></Login> */}
      {/* <Signup/> */}
      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
      </Routes>
    </>
  )
}

export default App
