import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'
import Header from '../components/Nav/Header'
import Navbar from '../components/Nav/Navbar'

function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      
      <Outlet />
      
      <Footer />
    </div>
  )
}

export default Layout
