import React from 'react';
import { CartWidget } from './CartWidget';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar_container'>
      <NavLink to={'/'}><h1>la tiendita</h1></NavLink>
      <ul>
        <li>
          <NavLink to={'/todos'} className={({ isActive }) => isActive ? "active" : ""} >
            <p>todos</p></NavLink>
        </li>
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
      {/* <Link to={'/cart'}>
       
      </Link> */}
      <CartWidget />
    </nav >
  )
}
