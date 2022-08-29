import React from 'react';
import {CartWidget} from './CartWidget';

export const Navbar = () => {
  return (
    <div className='navbar_container'> 
        <h1>the little shop</h1> 
        <ul>
          <li> 
              <a href='#'>option a</a> 
          </li>
          <li> 
              <a href='#'>option b</a> 
          </li>
          <li> 
              <a href='#'>option c</a>
          </li>
        </ul>
        <CartWidget />
    </div>
  )
}
