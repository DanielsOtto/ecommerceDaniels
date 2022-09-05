import React from 'react';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar_container'>
      <Link to={'/'}><h1>la tiendita</h1></Link>
      <ul>
        <li>
          <Link to={'/todos'}><p>todos</p></Link>
        </li>
        <li>
          <Link to={'/genero/cienciaFiccion'}>
            ciencia ficción</Link>
        </li>
        <li>
          <Link to={'/genero/fantasia'}>
            fantasía</Link>
        </li>
        <li>
          <Link to={'/genero/ficcion'}>
            ficción</Link>
        </li>
        <li>
          <Link to={'/genero/policial'}>
            policial</Link>
        </li>
        <li>
          <Link to={'/genero/terror'}>
            terror</Link>
        </li>
      </ul>
      {/* <Link to={'/cart'}>
       
      </Link> */}
      <CartWidget />
    </nav >
  )
}
