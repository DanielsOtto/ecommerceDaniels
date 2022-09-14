import React from 'react';
import { useCart } from '../context/CartContext';
import Item from './Item'; // solo para visualizar el objeto

export const Cart = () => {

  const { cart } = useCart();
  console.log(cart);
  return (
    <>
      <div className='box-cart'>
        carrito
      </div>
      {
        cart.map( item => <Item key={item.id} {...item}  />)
      }
    </>
  )
}
