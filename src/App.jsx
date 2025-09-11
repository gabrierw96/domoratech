import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Kits from './pages/Kits'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kits" element={<Kits />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App