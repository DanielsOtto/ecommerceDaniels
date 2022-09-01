import React from 'react';
import {CartWidget} from './CartWidget';

export const Navbar = () => {
  return (
    <div className='navbar_container'> 
        <h1>the little shop</h1> 
        <ul>
          <li> 
              <p>option a</p> 
          </li>
          <li> 
              <p>option b</p> 
          </li>
          <li> 
              <p>option c</p>
          </li>
        </ul>
        <CartWidget />
    </div>
  )
}
