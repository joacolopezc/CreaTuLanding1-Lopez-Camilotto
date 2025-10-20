import React from 'react'
import CartWidget from './CartWidget';

export default function NavBar() {
    return (
        <nav style={{ 
            backgroundColor: 'brown',
            margin: '0',
            padding: '15px 30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
        <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>
            <h1>Tierra Mailott</h1>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Productos</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a>
            <CartWidget />
        </div>
        </nav>
    );
}