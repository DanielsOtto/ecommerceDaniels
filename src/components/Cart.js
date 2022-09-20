import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartView } from './CartView';

export const Cart = () => {

  const { cart, removeAll, totalPrice } = useCart();
  
  return (
    <>
      <div className='box-cart'>
        carrito
      </div>
      {cart?.length === 0 ?
        <article className='cart-title'>
          <p className='emptyMessage'> El carrito se encuentra vacío </p>
          <Link to={'/'}>
            <button className='verMas'>ver mas libros</button>
          </Link>
        </article>
        :
        <section className='cartContainer'>
          {
            cart.map((item, i) => <CartView key={item.id} {...item} count={cart[i].count} id={item.id} />)
          }
          <section>
            <button className='cleanAll' onClick={removeAll}>vaciar carrito</button>
            <div className='box-price'>
              <p className='box-price__title'>precio total:</p>
              <p className='box-price__price'>${totalPrice()}</p>
            </div>
          </section>
        </section>
      }
    </>
  )
}
