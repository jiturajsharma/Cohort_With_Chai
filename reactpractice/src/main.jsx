import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import Singup from './components/Singup.jsx';
import Login from './components/Login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route  path = "/" element={ <App />}/>
      <Route  path = "/signup" element={ <Singup/>} />
      <Route  path = "/login" element={ <Login/>} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
