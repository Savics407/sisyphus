import { useState } from 'react'
import './App.css'
import Auth from './pages/auth'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import { AppContextProvider } from './contexts/AppContext'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AppContextProvider>

        <Router>
          <Routes>
            <Route exact path='/' element={<Auth />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Router>
        <ToastContainer />
      </AppContextProvider>
    </>
  )
}

export default App
