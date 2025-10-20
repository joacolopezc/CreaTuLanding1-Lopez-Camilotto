import './index.css'
import React from 'react'
import Navbar from './components/NavBar'

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      margin: 0,
      padding: 0,
      width: '100%'
    }}>
      <Navbar />
    </div>
  );
}

export default App