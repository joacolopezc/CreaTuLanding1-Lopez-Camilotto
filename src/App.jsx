import './index.css'
import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

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
      <ItemListContainer greeting="Bienvenidos/as a Tierra Mailott, tu tienda natural" />
    </div>
  );
}

export default App