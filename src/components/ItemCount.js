import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, initial, onAdd }) => {

    let [count, setCount] = useState(initial);
    let [cambiar, setCambiar] = useState(true);

    const aumentar = () => count < stock && setCount(next => next + 1);
    const disminuir = () => count > 0 && setCount(prev => prev - 1);
    let btnAdd = 'addCart';
    let btnIncrease = 'increase';
    let btnDecrease = 'decrease';

    stock === 0 && (btnAdd = 'block');
    count === 0 && (btnDecrease = 'cantDecrease');
    count === stock && (btnIncrease = 'cantIncrease');

    const addEventHandler = () => {
        setCambiar(prevState => prevState = false);

        onAdd(count);
    }

    return (
        <div className='counterBox' >
            {stock === 0 ? (
                <div className='divNoStock'>
                    <p className='noStock'>sin stock.</p>
                </div>
            ) : (
                <div className='divSiStock'>
                    <button className={btnDecrease} onClick={() => disminuir()} disabled={count === initial}> - </button>
                    <p>{count}</p>
                    <button className={btnIncrease} onClick={() => aumentar()} disabled={count === stock}> + </button>
                </div>
            )}
            {cambiar ?
                <button className={btnAdd} disabled={stock === 0} onClick={addEventHandler}>agregar</button>
                :
                (<Link className="btn-link" to={'/cart'}>
                    <button className='goCart'>carrito</button>
                </Link>)
            }
        </div>
    )
}

export default ItemCount;