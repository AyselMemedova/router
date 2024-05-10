import React from 'react'
import Header from '../../layout/site/Header/Header'
import Footer from '../../layout/site/Footer/Footer'
import { Outlet } from 'react-router'

const SiteRoot = () => {
  return (
    <div>
      <React.Fragment>
        <Header />
        <Outlet />
        <Footer />
      </React.Fragment>
    </div>
  )
}

export default SiteRoot
