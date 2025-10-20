import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export default function CartWidget() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <ShoppingCartIcon style={{ color: 'white', fontSize: '28px' }} />
            <span style={{ 
                marginLeft: '5px', 
                backgroundColor: 'red', 
                color: 'white', 
                borderRadius: '50%', 
                padding: '2px 6px',
                fontSize: '12px'
            }}>
                3
            </span>
        </div>
    );
}