import React from 'react'
import Header from '../../layout/admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/admin/Footer/Footer'

const AdminRoot = () => {
  return (
    <div className='aysel'>
      <React.Fragment>
        <div className='aysel__header'>
          <Header />
          <Outlet />
        </div>
        <Footer />
      </React.Fragment>
    </div>
  )
}

export default AdminRoot
