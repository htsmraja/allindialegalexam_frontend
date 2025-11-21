import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './page/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App