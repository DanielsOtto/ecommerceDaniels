import React from 'react';
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';

const MasInforacion = ({ book }) => {

  const { cantidad, titulo, img, alt, descripcion, precio, escritor, paginas } = book // en firebase existe cantidad - no stock
  const {addToCart, totalItemsCarrito} = useCart();

  const onAdd =(count) => {
   
    // console.log(`Se solicitaron ${count} copias del libro ${book.titulo} `);
    addToCart(book, count);
    totalItemsCarrito();
  }


  return (
    <div className='box-detail'>
      <img src={img} alt={alt} />
      <div className='box-info'>
        <h2>{titulo}</h2>
        <h4>{escritor}</h4>
        <p>{descripcion}</p>
        <p className='price'>ar$ {precio}</p>
        <div className='box-info__buy'>
          <p className='pages'>páginas: {paginas}</p>
          <ItemCount stock={cantidad} initial={0} onAdd={onAdd}/>
        </div>
      </div>
    </div>
  )
}

export default MasInforacion