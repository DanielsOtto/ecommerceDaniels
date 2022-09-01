import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {

    let [count, setCount] = useState(initial);
    
    const aumentar = () => count < stock && setCount(next => next +1);
    const disminuir = () => count > 1 && setCount(prev => prev -1);
    
    return (
        <div className='counterBox' >
            {stock === 0 ? (
                <div className='divNoStock'>
                    <p>No stock available.</p>
                </div>
            ) : (
                <div className='divSiStock'>
                    <button className='restar' onClick={() => disminuir()} disabled={count === initial}> - </button>
                    <p>{count}</p>
                    <button className='sumar' onClick={() => aumentar()} disabled={count === stock}> + </button>
                    {/* boton limpiar ? */}
                </div>
            )}
            <button className='addCart' onClick={() => onAdd(count)} disabled={stock === 0} > add</button>
        </div>
    )
}

export default ItemCount;