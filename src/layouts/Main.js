import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const Main = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Main
