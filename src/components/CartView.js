import React from 'react';
import { useCart } from '../context/CartContext';

export const CartView = ({ titulo, img, alt, descripcion, precio, escritor, paginas, count, id }) => {
    const { removeOne } = useCart();
    const addEventHandler = (id) => {
        removeOne(id);
    }

    return (
        <>
            <div className='box-detail'>
                <img src={img} alt={alt} />
                <div className='box-info'>
                    <h2>{titulo}</h2>
                    <h4>{escritor}</h4>
                    <p>{descripcion}</p>
                    <p className='price'>ar$ {precio}</p>
                    <div className='box-info__buy'>
                        <p className='pages'>páginas: {paginas}</p>
                        <p className='pages'>solicito {count} libros</p>
                        <button className='cleanAll' onClick={() => addEventHandler(id)}>eliminar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
