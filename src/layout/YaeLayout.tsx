// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../component"
import { ScrollToTop } from "../component/block"

const YaeLayout = () => {
  return (
    <div className="bg-white">
      <ScrollToTop />
        <Header />

        <Outlet />

        <Footer />
    </div>
  )
}

export default YaeLayout