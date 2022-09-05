import React, { useState } from 'react'

const ItemCount = ({ stock, initial}) => {

    let [count, setCount] = useState(initial);
    
    const aumentar = () => count < stock && setCount(next => next +1);
    const disminuir = () => count > 0 && setCount(prev => prev -1);
    let btnAdd = 'addCart';
    let btnIncrease = 'increase';
    let btnDecrease = 'decrease';
    
    stock === 0 && (btnAdd = 'block');
    count === stock && (btnIncrease = 'cantIncrease');
    count === 0 && (btnDecrease = 'cantDecrease');

    return (
        <div className='counterBox' >
            {stock === 0 ? (
                <div className='divNoStock'>
                    <p>sin stock.</p>
                </div>
            ) : (
                <div className='divSiStock'>
                    <button className={btnDecrease} onClick={() => disminuir()} disabled={count === initial}> - </button>
                    <p>{count}</p>
                    <button className={btnIncrease} onClick={() => aumentar()} disabled={count === stock}> + </button>
                    {/* boton limpiar ? */}
                </div>
            )}
            <button className={btnAdd} disabled={stock === 0} > agregar</button>
        </div>
    )
}

export default ItemCount;