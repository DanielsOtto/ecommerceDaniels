import React from 'react';
import { CartWidget } from './CartWidget';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Navbar = () => {

  const { cart } = useCart()

  return (
    <nav className='navbar_container'>
      <div className='container-h1'>
        <NavLink to={'/'}><h1>la tiendita</h1></NavLink>
      </div>
      <ul className='container-gender' >
        <li>
          <NavLink to={'/genero/cienciaFiccion'} className={({ isActive }) => isActive ? "active" : ""}>
            ciencia ficción</NavLink>
        </li>
        <li>
          <NavLink to={'/genero/fantasia'} className={({ isActive }) => isActive ? "active" : ""}>
            fantasía</NavLink>
        </li>
        <li>
          <NavLink to={'/genero/ficcion'} className={({ isActive }) => isActive ? "active" : ""}>
            ficción</NavLink>
        </li>
        <li>
          <NavLink to={'/genero/policial'} className={({ isActive }) => isActive ? "active" : ""}>
            policial</NavLink>
        </li>
        <li>
          <NavLink to={'/genero/terror'} className={({ isActive }) => isActive ? "active" : ""}>
            terror</NavLink>
        </li>
      </ul>
      <div className='orderStatus-title'>
        <NavLink to={'/estadoCompra'} className='orderStatus-style'>
          <p>estado del pedido</p> 
        </NavLink>
      </div>
      <div className='container-cart'>
        {
          cart?.length === 0 ?
            <></>
            :
            <NavLink to={'/cart'}>
              <CartWidget />
            </NavLink>
        }
      </div>
    </nav >
  )
}
