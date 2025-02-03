// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../component"
import { ScrollToTop } from "../component/block"

const HomeLayout = () => {
  return (
    <div><ScrollToTop />
        <Header />

        <Outlet />

        {/* <Footer /> */}
    </div>
  )
}

export default HomeLayout