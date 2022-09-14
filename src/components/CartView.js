import React from 'react';
import { useCart } from '../context/CartContext';

/* SIN USO */
export const ItemCart = ({ titulo, img, alt, descripcion, precio, escritor, paginas }) => {

    const {removeOne, cart} = useCart();
    const addEventHandler = (id)=> {

        removeOne(id);
        console.log("que pasa "+ cart);
    }

    return (
        <div className='box-detail'>
            <img src={process.env.PUBLIC_URL + img} alt={alt} />
            <div className='box-info'>
                <h2>{titulo}</h2>
                <h4>{escritor}</h4>
                <p>{descripcion}</p>
                <p className='price'>ar$ {precio}</p>
                <div className='box-info__buy'>
                    <p className='pages'>páginas: {paginas}</p>
                    <button onClick={addEventHandler}>eliminar</button>
                </div>
            </div>
        </div>
    )
}
