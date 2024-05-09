import React from 'react'
import Header from '../../layout/admin/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../../layout/admin/Footer/Footer'

const AdminRoot = () => {
  return (
    <div>
      <React.Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
      </React.Fragment>
    </div>
  )
}

export default AdminRoot
