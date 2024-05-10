import React from 'react'
import '../../admin/Header/Header.css'
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
              <Link to='/admin'>Dashboard</Link>
              </li>
              <li>
              <Link to='/admin/products'>Products  </Link>
        <i class="fa-solid fa-caret-down"></i>

              </li>
              <li>
              <Link to='/admin/user'>Users</Link>
              </li>
              <li>
              <Link to='/admin/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/admin/add'> Add Product</Link>
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
