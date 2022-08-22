import React from 'react';
import {CartWidget} from './CartWidget';

export const Navbar = () => {
  return (
    <div className='navbar_container'> 
        <h1>La Tiendita</h1> 
        <ul>
          <li> 
              <a href='#'>opcion a</a> 
          </li>
          <li> 
              <a href='#'>opcion b</a> 
          </li>
          <li> 
              <a href='#'>opcion c</a>
          </li>
        </ul>
        <CartWidget />
    </div>
  )
}
