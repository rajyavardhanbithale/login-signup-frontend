// Inspired by https://www.uplabs.com/posts/dark-mode-login-and-signup-app-ui-design
// Login-Signup Frontend using ReactJS, Tailwind and Ionicons 

// Follow for more.
// Github: https://github.com/rajyavardhanbithale
// LinkedIn: https://www.linkedin.com/in/rajyavardhan-bithale-999482258/
// Instagram: https://www.instagram.com/rajyavardhan.8/

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
