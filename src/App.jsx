import { useState } from 'react'
import './App.css'
import Auth from './pages/auth'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route exact path='/' element={<Auth />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
