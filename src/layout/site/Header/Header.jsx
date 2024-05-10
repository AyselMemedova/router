import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='all_navbar'>
      
      <div className='container'>
        <div className='row'>
        <div className='col-3'>
          <h1>Start Bootstrap</h1>
        </div>
        <div className='col-6'>
          <ul className='navbar_list'>
            <li>
              <Link to='/'>Home</Link>
              </li>
              <li>
              <Link to='/shop'>Shop  </Link>
        <i class="fa-solid fa-caret-down"></i>

              </li>
              <li>
              <Link to='/contact'>Contact</Link>
              </li>
              <li>
              <Link to='/blog'>Blog</Link>
              </li>
           
          </ul>
        </div>
        <div className='col-3'>
          <button className='navbar_list_shop'>
          <i class="fa-solid fa-cart-shopping"></i>
          Cart
          </button>

        </div>
        </div>
   

      </div>
      
    </div>
  )
}

export default Header
