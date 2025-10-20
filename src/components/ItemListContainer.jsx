import React from 'react'

export default function ItemListContainer(props) {
    return (
        <div style={{ 
            padding: '40px',
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
            minHeight: '300px'
        }}>
            <h2 style={{ 
                fontSize: '32px',
                color: '#333',
                marginBottom: '20px'
            }}>
                {props.greeting}
            </h2>
            <p style={{ fontSize: '18px', color: '#666' }}>
                Aquí verás los productos próximamente
            </p>
        </div>
    );
}