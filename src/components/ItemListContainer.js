import React from 'react';

export const ItemListContainer = ({greeting}) => {
    const estilos={
        color: "red",
    }
    
    return (
        <main>
            <p className='saludo' style={estilos}> {greeting}</p>
        </main>
    )
}