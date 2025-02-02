// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../component"

const HomeLayout = () => {
  return (
    <div>
        <Header />

        <Outlet />
    </div>
  )
}

export default HomeLayout