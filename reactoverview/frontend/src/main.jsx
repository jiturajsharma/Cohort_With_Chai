import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Hero from './components/Hero.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route  path = "/" element={ <App />}/>
      <Route path='/login' element= { <Login />} />
      <Route  path = "/Signup" element={ <Signup />}/>
      <Route  path = "/Hero" element={ <Hero />}/>
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
